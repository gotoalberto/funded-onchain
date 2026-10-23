# La base de los porcentajes del score

> **Current definition of how the score is calculated (Alberto, 2026-10-23).** It sits above any other definition of the score in this repo, `STORY_FACTS.md` and `MODEL.md` included. Where they disagree on how the score is computed, this file wins.

## El problema

Para dar una nota a un trader usamos algunos porcentajes: su caída máxima no puede pasar del 25%,
su peor trade se mide como % de su cuenta y las cuentas pequeñas puntúan menos. Todo porcentaje es
**una cantidad dividida entre una base**, y aquí la base es el dinero de la cuenta.

El problema es que **el trader es el dueño de ese dinero**. Puede depositar, retirar, mover entre
spot y perps o recibir tokens de otra cuenta y venderlos. Cada una de esas cosas mueve la base, y el
porcentaje sale distinto sin que haya operado ni mejor ni peor.

Ejemplos:

- **Inflar la base para esconder una caída.** Pierde $300 con $1,000 en la cuenta: un 30%, y no
  se clasifica. Si antes deposita $9,000, los mismos $300 son un 3%.
- **Depósito relámpago.** Deposita $1M un minuto y lo retira. Si la base es "lo máximo que ha
  depositado", su base queda inflada en $1M todo el mes.
- **Dinero que entra sin ser un depósito.** Le transfieren HYPE a spot y lo vende por USDC: su
  USDC sube y no hay ningún depósito que lo explique.

El leaderboard oficial de Hyperliquid tiene el mismo problema. No muestra el PnL en %, solo un ROI
con la base `max(100, valor inicial + máximo depositado)`. Aun así, su número 2 de la semana tiene
$763k en la cuenta, todo en USDC de spot, ninguna operación, y un ROI del 3,544%: su base no ve el
dinero de spot y se quedó en el mínimo de 100.

Hay que mirar además **a quién le conviene cada base**:

- En un ROI, al trader le conviene una base pequeña, para que el % salga grande. Por eso Hyperliquid
  usa el máximo: depositar solo la agranda.
- En una caída máxima, le conviene una base grande, para que su caída parezca pequeña. Ahí esa misma
  fórmula se puede trucar con el depósito relámpago.

Una fórmula que es segura para un porcentaje puede ser trucable para otro.

## Lo que no tiene el problema: el PnL

El PnL no lo sacamos de restar saldos, sino de los **trades de perps**: lo realizado (`closedPnl −
fee + funding`) más lo abierto (posiciones abiertas × precio de marca). Depositar, retirar, mover
dinero o vender tokens en spot no lo tocan. El problema está solo en la base, el número entre el que
dividimos.

Además, varios ingredientes del score se calculan en dólares y son cocientes, así que la base se
cancela y no hace falta (calidad del retorno, concentración, % de trades ganados). La base solo es
imprescindible para la caída máxima ≤ 25% y para el recorte por tamaño de cuenta.

## La propuesta

1. **Leer el valor de la cuenta cada minuto**: USDC de spot (precompile `0x801`) más el valor en
   cada dex de perps soportado (`0x80F`), que ya incluye lo abierto. Lo comprobamos contra el valor
   que muestra la propia web de Hyperliquid y cuadra al céntimo, también en modo unificado, en
   aislado, en cruzado y en el dex HIP-3 `xyz`.
2. **Guardar por cada día el valor más bajo** que tuvo la cuenta ese día.
3. **Base = el más bajo de esos mínimos diarios en los últimos 30 días.**

Por qué funciona: para subir la base, el dinero tiene que estar en la cuenta **todos los minutos
de los 30 días**.

- El depósito relámpago no la sube.
- Depositar justo antes de medianoche y retirar justo después tampoco: por eso cada minuto y no una
  foto diaria.
- Vender HYPE una vez no la sube.
- Retirar sí la baja, pero eso va contra el trader, no a su favor.

Ejemplo: Ana tiene $2,000 todo el mes y un día deposita $1M durante un minuto. Su mínimo diario
sigue siendo $2,000 todos los días, así que su base es $2,000. Su peor caída de $300 es un 15%: se
clasifica, y la misma cuenta con $1,000 no se clasificaría.

## Lo que cuesta y lo que queda abierto

- **Es conservadora a propósito.** Quien retira beneficios o deposita a mitad de mes arrastra una
  base más baja hasta 30 días, y sus porcentajes salen peores. Preferimos equivocarnos contra el
  trader que a su favor.
- **Cuentas nuevas.** Antes de su primer depósito la cuenta vale $0, y el mínimo sería 0. Hay que
  contar desde el primer día con al menos $100, con un suelo de $100 como el de Hyperliquid.
- **Lo que no es USDC ni perps** (HYPE sin vender, staking) no cuenta en la base. Es la opción
  conservadora: la base sale más baja, nunca más alta.
- **Coste de leer cada minuto.** En una prueba se leyeron 30,000 cuentas en ~2.3 s por dex con una
  sola llamada agrupada (Multicall3) a QuickNode. Faltan por medir los créditos; se puede limitar a
  las cuentas con actividad.
