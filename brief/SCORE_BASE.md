# El método del score

> **Método definitivo del score (Alberto, 2026-10-23).** Está por encima de cualquier otra definición del score en este repo, `STORY_FACTS.md` y `MODEL.md` incluidos. Sustituye a la base de los porcentajes de más abajo, que queda descartada.

## El método

El score se calcula **sin el saldo de la cuenta**, solo con las operaciones del trader. Depositar, retirar, comprar en spot, prestar, pedir prestado o recibir transferencias no lo cambian.

- **Calidad del retorno:** a partir del PnL diario en dólares.
- **Peor operación:** en relación con lo que ha ganado.
- **Caída máxima (max drawdown):** en relación con su PnL.
- **Tamaño:** a partir del tamaño medio de sus posiciones.

El límite de caída del 25% desaparece. Estaba sobre todo para dejar fuera a los traders muy apalancados, y lo sustituyen dos límites:

- **Nunca pasar de un apalancamiento máximo** durante los 30 días, medido minuto a minuto.
- **No ser liquidado nunca** durante los 30 días.

El PnL sale de los trades de perps: lo realizado (`closedPnl − fee + funding`) más lo abierto (posiciones abiertas a precio de marca).

## Por qué no hay base

La base sería el valor de la cuenta del trader, que es suyo y cambia constantemente: depósitos, retiros, spot, supply, borrowing y transferencias. Cualquiera de esos cambios mueve los porcentajes sin que opere mejor ni peor. Se probó a usar como base el valor más bajo de los últimos 30 días, leído cada minuto, y se descartó: quien lo retira todo menos 1 USDC, aunque sea unos minutos, ve su base hundida 30 días y no se clasifica en un mes. No se puede penalizar a nadie por sacar su dinero.

## Por definir

Puntos que salieron al revisarlo y que todavía no están decididos:

1. **Valor de la cuenta para el apalancamiento.** Apalancamiento = tamaño de las posiciones / valor de la cuenta, así que el valor minuto a minuto hay que recogerlo igualmente. Falta decidir si en cuentas unificadas se resta lo pedido prestado.
2. **Pérdida frente al dinero.** Con estas reglas alguien puede perder un 40% de su cuenta sin pasar del apalancamiento máximo ni ser liquidado, y clasificarse, mientras que el seat se cierra al perder un 10% del capital. Propuesta: medir la caída en dólares contra el seat del tier al que aspira.
3. **PnL cerca de cero o negativo.** La peor operación y la caída frente al PnL se disparan o no tienen sentido. Hace falta un mínimo de PnL o de trades antes de calcularlas.
4. **Tamaño medio.** Premia el apalancamiento y se infla con coberturas entre cuentas. Propuesta: ponderarlo por tiempo y ponerle un tope.
5. **Posiciones perdedoras abiertas** cuentan a precio de marca, para que no se pueda esconder una mala operación sin cerrarla.
6. **El auto deleveraging (ADL)** de Hyperliquid no cuenta como liquidación.

## Descartado: la base de los porcentajes (texto original del 2026-10-23)

### El problema

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

### Lo que no tiene el problema: el PnL

El PnL no lo sacamos de restar saldos, sino de los **trades de perps**: lo realizado (`closedPnl −
fee + funding`) más lo abierto (posiciones abiertas × precio de marca). Depositar, retirar, mover
dinero o vender tokens en spot no lo tocan. El problema está solo en la base, el número entre el que
dividimos.

Además, varios ingredientes del score se calculan en dólares y son cocientes, así que la base se
cancela y no hace falta (calidad del retorno, concentración, % de trades ganados). La base solo es
imprescindible para la caída máxima ≤ 25% y para el recorte por tamaño de cuenta.

### La propuesta

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

### Lo que cuesta y lo que queda abierto

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
