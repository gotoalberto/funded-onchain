# Preguntas de producto abiertas para funded.onchain.cc

Alberto, aquí están las reglas que las revisiones de los nueve flujos (ronda 1 y ronda 3) dejaron sin definir. Ya he quitado lo que resuelven las secciones Decisions del BRIEF (mes de 30 días, pérdida diaria sobre equity, "at or above $5,000 rolls over", lista de espera para plazas no activadas, dos rankings, la cuenta financiada no puntúa en la temporada, pago solo a la wallet de onchain.cc, sin penalización por perder una cuenta, etc.).

Cada pregunta lleva qué pantallas toca, las opciones y lo que recomiendo. Las recomendaciones parten de lo que hacen FTMO, Topstep o Apex y del plan: la cuenta la pone Bitso, el reparto es 80/20 y el negocio son las comisiones del terminal.

## Las que más pesan

### 1. Qué limita el tamaño de la cuenta

**Pregunta:** el tope de $25,000 se aplica a la mayor posición abierta sola o a la suma de todas las posiciones abiertas, y cuentan las órdenes límite pendientes.

**Pantallas:** todo F05 (comprobación previa, medidor de posición, "Order over the limit", columna "Account close"), las reglas de F01 y la tabla de bandas de todas partes.

**Opciones:** (a) tope por posición, como dice hoy el BRIEF; (b) tope sobre el nocional total abierto; (c) total abierto más las órdenes pendientes que aumentarían la exposición.

**Recomiendo:** (c), y ningún límite de apalancamiento por mercado aparte del tope y del máximo de Hyperliquid. Con (a) un trader abre cinco posiciones de $25,000 sobre $5,000 de USDC (25x) y toca el suelo del 10% con un movimiento del 0,4%; las firmas de prop limitan la exposición total, y contar las pendientes evita que un grupo de órdenes ejecutadas a la vez rompa el tope.

### 2. Qué operaciones cuentan para la temporada y cómo se evita el juego

**Pregunta:** cuentan todas las ejecuciones de la cuenta de Hyperliquid (su web, bots, APIs) o solo las órdenes colocadas desde onchain.cc o funded.onchain.cc, y hay un tamaño o un tiempo mínimo para que una operación cuente.

**Pantallas:** F02 (las tres condiciones de entrada, la columna "Placed on"), F03 (operaciones del perfil, desglose de la puntuación, Stats), F01 (reglas).

**Opciones:** (a) cualquier ejecución de la cuenta; (b) solo órdenes del terminal; sobre eso, sin mínimos o con un nocional mínimo y un tiempo mínimo de posición abierta.

**Recomiendo:** (b), con un mínimo de $50 de nocional y 60 segundos abierta para contar como operación y en la tasa de acierto (el volumen cuenta siempre). Las comisiones solo se cobran en órdenes del terminal, así que la temporada debería premiar el uso del terminal, y los mínimos impiden llegar a las 10 operaciones con ida y vuelta de $60 en segundos.

### 3. Depósitos, retiros y comisiones dentro de la puntuación

**Pregunta:** cómo afectan depósitos y retiros a la rentabilidad sobre capital, al drawdown máximo y al factor de saldo, y si el PnL neto descuenta comisiones y funding.

**Pantallas:** F03 04 (desglose), F02 (el saldo empieza en $0 y luego deposita), F03 y F09 (medidores de suelos), Stats.

**Opciones:** rentabilidad sobre saldo inicial, saldo medio, saldo inicial más depósitos netos o saldo final; factor de saldo como foto al cierre, media ponderada en el tiempo o máximo; PnL antes o después de comisiones y funding.

**Recomiendo:** PnL neto después de comisiones y funding; rentabilidad sobre saldo inicial más depósitos netos ponderados por tiempo; drawdown y equity con los depósitos y retiros neutralizados; factor de saldo como media ponderada en el tiempo. Así un depósito el último día no compra puntos ni maquilla el drawdown, y es la forma en que FTMO y los rankings de rentabilidad tratan los flujos de caja.

### 4. Retiro parcial y qué pasa con el beneficio no reclamado

**Pregunta:** el trader puede reclamar menos que todo su beneficio, y qué pasa con lo no reclamado si llega la siguiente fecha de pago o la ventana termina antes de reclamar.

**Pantallas:** F08 02 y 03 (el aviso ámbar de "claiming now sets equity to $5,000"), F08 06, F07 01 y 02.

**Opciones:** (a) todo o nada, como ahora, y lo no reclamado se pierde, se congela o se suma al pago siguiente; (b) reclamo parcial, y lo que queda sigue siendo beneficio reclamable más tarde.

**Recomiendo:** (b): la marca de agua se queda en los $5,000 iniciales, cada retiro saca 80% para el trader y 20% para Bitso, y lo no reclamado vive en la equity y sigue la suerte de la cuenta (si cierra por debajo del inicio, se pierde). Quita la trampa de cobrar cuatro días antes de que acabe la ventana y simplifica el aviso de F08. Ojo, esto cambia la definición de marca de agua de Decisions ("equity right after the last payout").

### 5. Qué puede hacer el trader con la cuenta congelada y cómo acaba

**Pregunta:** con la cuenta congelada por una ejecución sin orden del terminal, se pueden reducir o cerrar posiciones, siguen saltando TP y SL, sigue corriendo la ventana y la fecha de pago, y si se confirma la infracción qué pasa con el beneficio no pagado y con el derecho a pedir otra plaza.

**Pantallas:** F06 02, 05 y 06, F08 02 (revisión que encuentra una ejecución), F07 (fin de ventana durante el congelado), F09.

**Opciones:** solo reducir o nada; reloj parado o corriendo; si se confirma, beneficio pagado al trader, perdido o devuelto a Bitso; volver a pedir plaza sí o no.

**Recomiendo:** solo reducir (y TP y SL siguen funcionando), pérdida diaria y máxima siguen activas, la ventana y la fecha de pago no se paran, y si se confirma la cuenta cierra con el beneficio no pagado para Bitso. Puede volver a pedir plaza, como dice Decisions, salvo abuso probado (multicuenta o wash trading). Dejar a alguien sin poder reducir riesgo 24 horas acaba en pérdidas para Bitso, y perder el beneficio es la sanción estándar en prop sin necesidad de vetos.

### 6. A quién va una plaza no activada

**Pregunta:** si una plaza de $25K no se activa antes del Nov 21, el #61 recibe una de $5K y nadie se mueve, o todos los de debajo suben un puesto y algunos cambian de banda.

**Pantallas:** F04 03, 06, 09 y 11 (lista de espera), F09 03.

**Opciones:** (a) cada plaza perdida pasa al siguiente de la lista de espera en la banda más baja; (b) cascada, todos suben un puesto.

**Recomiendo:** (a). Quien ya firmó o activó una cuenta de $5K no tiene que volver a firmar por otro tamaño, el depósito de Bitso no cambia a mitad de la activación y la pantalla de lista de espera puede decir algo exacto.

### 7. Plazas, bandas y reglas a partir de la Temporada 2

**Pregunta:** las temporadas siguientes mantienen 60 plazas y el mismo reparto por bandas, y qué reglas gobiernan una cuenta concedida en una temporada que sigue viva en la siguiente.

**Pantallas:** F01 (landing, reglas, "Fixed until Nov 19"), F09 02 y 03, F04 05, F07 03.

**Opciones:** plazas fijas, plazas que crecen con el volumen o con los resultados; reglas de la temporada en curso o reglas de cuando se firmó.

**Recomiendo:** plazas y bandas publicadas al empezar cada temporada y fijas durante ella (la Temporada 2 igual que la 1), y cada cuenta se rige por las reglas que firmó durante toda su vida. Bitso puede ajustar la capacidad según lo que dejen las comisiones sin cambiar nada a mitad de partido, y casa con el aviso de 48 horas de las reglas de dollarize.

### 8. Stop obligatorio y cómo bloquea la comprobación previa

**Pregunta:** el stop es obligatorio en la cuenta financiada, un riesgo de stop mayor que el margen diario que queda bloquea la orden o solo avisa, y la comprobación se hace por orden o sumando todos los stops abiertos.

**Pantallas:** F05 02, 03 y 05 (ticket, "2 account rules would break", botón deshabilitado), reglas de F01.

**Opciones:** stop obligatorio u opcional; bloqueo o aviso; por orden o sobre el riesgo total abierto.

**Recomiendo:** stop opcional, bloqueo solo de límites duros (tope, mercados permitidos, margen cruzado) y aviso, sin bloqueo, cuando el riesgo total de los stops abiertos más la nueva orden supera el margen diario. FTMO y Topstep no obligan a poner stop y el público de Hyperliquid lo rechazaría; la pérdida diaria ya protege a Bitso, y sumar el riesgo evita que cinco órdenes pasen solas y juntas rompan el día.

## Temporada y ranking

### 9. Qué es un día de trading

**Pregunta:** un día UTC cuenta si hay al menos una ejecución (abrir o cerrar) o solo si hay una operación cerrada, y qué pasa con una posición abierta antes del Oct 20 y cerrada dentro.

**Pantallas:** F02, F03 y F09 (medidor de 15 días), F04 04 ("13 days, needs 15"), F01 reglas.

**Opciones:** cualquier ejecución; solo cierres; posiciones previas a la temporada fuera o valoradas al precio del inicio.

**Recomiendo:** cualquier ejecución que cumpla los mínimos de la pregunta 2, y las posiciones abiertas antes del inicio cuentan valoradas al precio de marca del Oct 20 00:00. Es la definición de FTMO y la más fácil de explicar en un medidor.

### 10. Mercados que cuentan en la cuenta propia

**Pregunta:** en la temporada cuenta cualquier perp de Hyperliquid o solo la lista de mercados permitidos de la cuenta financiada.

**Pantallas:** F03 05 (trade con la cuenta propia), F02, F01 reglas.

**Opciones:** todos los mercados del terminal; solo la lista permitida.

**Recomiendo:** solo la lista permitida. Se mide al trader en lo mismo que operará con dinero de Bitso, y un buen resultado en un memecoin sin liquidez no dice nada del riesgo en BTC u oro.

### 11. Cómo se normaliza la puntuación y cada cuánto se actualiza

**Pregunta:** cada factor se compara contra todos los del ranking o contra todos los traders de perps, se recalcula entre los que piden plaza al cierre, y cada cuánto se refresca.

**Pantallas:** F03 01, 02 y 04, F04 01 (dos rankings), F01 02.

**Opciones:** percentil entre los del ranking o entre todos; recalcular al cierre o congelar; refresco cada minuto, cada hora o diario.

**Recomiendo:** percentil entre los del ranking, puntuación congelada al cierre de la temporada (sin recalcular entre solicitantes, el orden ya sale de ahí) y refresco cada minuto. Recalcular al cierre movería puntuaciones que el trader vio como finales.

### 12. Desempates

**Pregunta:** cómo se rompe un empate de puntuación en el ranking y en el reparto de plazas.

**Pantallas:** F03 02, F04 03 y 09.

**Opciones:** mayor PnL neto, mayor rentabilidad, menor drawdown, quien pidió antes.

**Recomiendo:** primero mayor PnL neto, luego menor drawdown. Premia lo que le importa a Bitso, que es ganar dinero con poco riesgo, y evita una carrera por pedir en el primer segundo.

### 13. Qué se ve en el perfil público

**Pregunta:** el perfil muestra la wallet junto al alias, las operaciones cerradas son públicas y con qué retraso, y un trader puede ocultarse del ranking.

**Pantallas:** F03 03 (perfil), F09 02, F02 05 (alias).

**Opciones:** wallet visible u oculta; operaciones en tiempo real, con 24 horas de retraso u ocultas; ocultarse sí o no.

**Recomiendo:** alias más wallet acortada, operaciones cerradas con 24 horas de retraso, y sin opción de ocultarse mientras esté en el ranking. Todo está en cadena de todos modos, el retraso protege la estrategia y el ranking público es el escaparate del producto.

## Puntuación y suelos

### 14. Definición del drawdown máximo

**Pregunta:** el 25% se mide sobre equity con no realizado, intradía y desde el máximo de equity, o sobre saldo al cierre de cada día.

**Pantallas:** F03 y F09 (medidor de suelos), F04 04, "Can't request" en todos los rankings.

**Opciones:** equity continua desde el pico; saldo de cierre diario; solo realizado.

**Recomiendo:** equity con no realizado, desde el pico, muestreada al minuto, con depósitos y retiros neutralizados (pregunta 3). Es como se mide la cuenta financiada, así el suelo predice el comportamiento que tendrá con dinero de Bitso.

### 15. Cuándo se comprueba el saldo de $100 y los mínimos de entrada

**Pregunta:** los $100 de saldo se exigen siempre, en una foto o solo al cierre, y si alguien baja de $100 o de algún mínimo sale del ranking.

**Pantallas:** F02 03 y 04 ("Keep it at $100 or more"), F03 01, F04 04.

**Opciones:** continuo (sale del ranking al bajar); una vez cumplido queda dentro; comprobación al cierre para poder pedir.

**Recomiendo:** los mínimos, una vez cumplidos, te dejan en el ranking toda la temporada, y para pedir plaza se exige saldo de $100 o más al cierre. Evita que la gente entre y salga del ranking por un retiro y mantiene la regla en una frase.

## Solicitud de plaza y activación

### 16. Retirar o cambiar una solicitud

**Pregunta:** el trader puede retirar la solicitud o cambiar la ventana elegida después de firmar, y la solicitud le compromete a algo.

**Pantallas:** F04 02 y 03 ("Change window"), F04 06.

**Opciones:** sin cambios tras firmar; cambios hasta que cierre la ventana de solicitudes; cambios hasta la activación.

**Recomiendo:** retirar o cambiar la ventana hasta el cierre de la ventana de solicitudes, nada después. La asignación de las 00:00 necesita una lista cerrada, y antes de eso no cuesta nada dejar margen.

### 17. Qué firma el trader al pedir plaza

**Pregunta:** qué contiene la firma de solicitud (reglas, ventana, temporada) y si vale para una sola temporada.

**Pantallas:** F04 02 y 07.

**Opciones:** firma de un hash de las reglas más la ventana, por temporada; firma única para siempre.

**Recomiendo:** firma por temporada del hash de las reglas de esa temporada y de la ventana elegida, como el gate de términos de dollarize. Deja constancia de qué reglas aceptó cada uno, que es lo que pide la pregunta 7.

### 18. Pedir plaza en la misma ventana en que se pierde la cuenta

**Pregunta:** un trader cuya cuenta cierra durante la ventana de solicitudes (por ejemplo, pérdida máxima el Dec 18 a las 10:00) puede pedir plaza en esa misma ventana.

**Pantallas:** F04 05, F09 01 y 03, F06 03.

**Opciones:** sí, si cumple los suelos; no, espera al siguiente cierre.

**Recomiendo:** sí. Decisions dice que la única limitación es una cuenta a la vez, y en ese momento ya no tiene ninguna.

### 19. Retrasos de Bitso en la activación

**Pregunta:** si el trader firmó a tiempo pero el depósito de Bitso llega después del Nov 21 00:00, o la firma caduca, la plaza está a salvo.

**Pantallas:** F04 07, 08 y 11.

**Opciones:** plaza segura en cuanto el trader firma; plaza sujeta al depósito.

**Recomiendo:** plaza segura en cuanto el trader firma, y una firma caducada se repite con el mismo plazo. El plazo de 48 horas solo debe medir lo que depende del trader.

## Reglas de la cuenta y terminal

### 20. Mercados RWA fuera de horario

**Pregunta:** la cuenta financiada puede abrir o mantener posiciones en oro, petróleo, índices o acciones con el mercado subyacente cerrado, y cómo se miden la pérdida diaria y el fin de ventana en esas horas.

**Pantallas:** F05 02 (horario de mercados RWA), F06 01, F07 01.

**Opciones:** igual que cripto; solo mantener, sin abrir; cierre obligatorio antes del fin de semana.

**Recomiendo:** mantener sí y abrir no cuando el subyacente está cerrado, con las reglas medidas sobre el precio de marca de Hyperliquid como siempre. Los huecos de apertura del lunes son el riesgo típico que las firmas de prop limitan, y así no hace falta un cierre forzoso.

### 21. Cuenta propia durante una pausa diaria

**Pregunta:** con la cuenta financiada en pausa por pérdida diaria, el trader puede seguir operando con su cuenta propia, y eso cuenta para la temporada.

**Pantallas:** F06 01, F05 04 (cambio de cuenta).

**Opciones:** sí y cuenta; sí sin contar; bloqueado.

**Recomiendo:** sí, y cuenta para la temporada como cualquier operación propia. Es su dinero y sus comisiones, y Decisions ya separa las dos cuentas.

## Ventana de trading

### 22. Cierre de posiciones al final de la ventana

**Pregunta:** la equity se lee a precio de marca a las 00:00 y las posiciones se cierran a mercado después; si el cierre real sale distinto, quién asume la diferencia y puede cambiar el resultado.

**Pantallas:** F07 01, 02 y 03, F06 03 (cierre por debajo del suelo, $4,488.60).

**Opciones:** decide la lectura a marca y Bitso asume el deslizamiento; decide el precio real de cierre.

**Recomiendo:** decide la lectura a marca de las 00:00 y el deslizamiento (también el del cierre por pérdida máxima por debajo de $4,500) es siempre de Bitso, sin tope. El trader nunca debe nada, y un resultado que cambia después de anunciado no se puede explicar en pantalla.

### 23. Fin de ventana con la cuenta en pausa o congelada

**Pregunta:** si la ventana termina con la cuenta pausada por pérdida diaria o congelada, se lee la equity igual a las 00:00, y una cuenta congelada renueva o cierra.

**Pantallas:** F07 01, F06 01 y 02.

**Opciones:** lectura normal en ambos casos; en congelada, decisión aplazada hasta que acabe la revisión.

**Recomiendo:** pausa, lectura normal; congelada, se guarda la lectura de las 00:00 y se aplica cuando termine la revisión (si se levanta el congelado, vale esa lectura). Ninguna regla nueva y el trader sabe de antemano su resultado.

### 24. Cambiar la duración al renovar y cerrar la cuenta a voluntad

**Pregunta:** el trader puede cambiar de 1 mes a 1 semana (o al revés) al renovar, o cerrar la cuenta voluntariamente antes de tiempo, y en ese caso se le paga el beneficio.

**Pantallas:** F07 02, F05 01, F08 01.

**Opciones:** duración fija o elegible en cada renovación; cierre voluntario sí o no; beneficio pagado o devuelto a Bitso.

**Recomiendo:** elegir duración durante las 24 horas previas a cada renovación, y cierre voluntario permitido con el beneficio pagado solo si ya pasó la semana 8 (antes vuelve a Bitso, igual que una cuenta que no llega viva al primer pago). Coherente con la regla de Decisions sobre el primer pago y da control al trader sin abrir un hueco para cobrar antes.

### 25. Historial privado de cuentas cerradas

**Pregunta:** el trader ve en algún sitio el resultado de sus cuentas anteriores (por ejemplo, en Stats).

**Pantallas:** F07 03, F09 01 y 02, Stats.

**Opciones:** sí, solo para él; no.

**Recomiendo:** sí, una lista privada en Stats. Cuesta poco, ayuda a que vuelva a pedir plaza y no choca con la decisión de no prometer perfiles públicos.

## Pagos

### 26. Suelo de pérdida máxima después de un pago

**Pregunta:** tras un pago el suelo sigue en $4,500 o se mueve con la marca de agua.

**Pantallas:** F08 05, F05 01 (medidor de pérdida máxima), F06 03.

**Opciones:** fijo en $4,500; 10% por debajo de la nueva marca de agua.

**Recomiendo:** fijo en $4,500. Es el modelo estático de FTMO, se explica con un número y, como cada pago devuelve la equity a $5,000, el riesgo de Bitso no cambia.

### 27. El pago y la pérdida diaria

**Pregunta:** sacar un pago cuenta como caída de equity para el límite diario del 5%.

**Pantallas:** F08 04 y 05, F05 01, F06 01.

**Opciones:** cuenta como pérdida; no cuenta y la equity de inicio del día baja en lo retirado.

**Recomiendo:** no cuenta, y la equity de inicio del día se ajusta restando lo retirado. Si contara, cobrar podría pausar la cuenta, un absurdo que ningún trader aceptaría.

### 28. Plazo de la revisión de ejecuciones

**Pregunta:** "Usually under 24 hours" es un compromiso, qué pasa si la revisión pasa de la fecha límite de reclamo, y la revisión mira algo más que el emparejamiento con órdenes del terminal ("No self trades", "No counterparty concentration").

**Pantallas:** F08 02, 03 y 04.

**Opciones:** plazo prometido o indicativo; fecha límite extendida o no; solo emparejamiento o más controles.

**Recomiendo:** objetivo de 24 horas sin promesa, la fecha límite se alarga lo que dure la revisión, y solo se comprueba el emparejamiento; las demás pantallas quitan los otros dos controles. Lo antiabuso ya vive en las reglas de la temporada (pregunta 2) y Decisions dice que la revisión solo comprueba.

### 29. Red del pago y quién paga el gas

**Pregunta:** en qué red llega el USDC a la wallet de onchain.cc (Arbitrum o Hyperliquid) y quién paga la comisión de red.

**Pantallas:** F08 04 y 05.

**Opciones:** Arbitrum o saldo de Hyperliquid; gas del trader o de Bitso.

**Recomiendo:** directo al saldo de Hyperliquid de su cuenta de onchain.cc, gas a cargo de Bitso. Ahí puede volver a operar sin puente (más volumen y comisiones) y el coste es mínimo.

## Eventos de riesgo y apelaciones

### 30. Qué se puede apelar y en qué plazo

**Pregunta:** qué eventos admiten apelación (pausa, cierre por pérdida máxima, congelado, incidente), qué puede cambiar una apelación, cuánto tarda la respuesta y quién responde ("Risk desk, Bitso").

**Pantallas:** F06 01, 02, 05 y 06, F01 reglas ("7 days", "3 business days").

**Opciones:** todo apelable o solo congelado y cierres; plazo de 24 horas, 3 días hábiles o 7 días.

**Recomiendo:** solo congelados y cierres ligados a un incidente; una pausa diaria no se apela porque acaba en horas. Respuesta en 3 días hábiles del equipo de riesgo de Bitso, y la apelación puede levantar el congelado o reabrir la cuenta. Así el botón Appeal promete algo concreto en cada pantalla donde aparece.

### 31. Qué cubre un incidente

**Pregunta:** un incidente incluye caídas de Hyperliquid o solo de onchain.cc, qué se suspende mientras dura, cuentan las ejecuciones de TP y SL, qué pasa si al terminar la equity está por debajo del suelo y qué recibe quien pulsa "I was affected".

**Pantallas:** F06 04, F05 02.

**Opciones:** solo caídas propias o también del venue; reglas suspendidas o pérdidas excluidas; compensación, ampliación de ventana o nada.

**Recomiendo:** incidentes declarados de onchain.cc o de Hyperliquid; mientras duran no hay pausas ni cierres automáticos, las ejecuciones de TP y SL cuentan, al terminar se evalúa normal con una hora para reducir, y "I was affected" abre un caso que se resuelve por apelación sin compensación prometida. Las firmas de prop revisan caso a caso, y prometer ampliar la ventana invitaría a reclamar en cada caída.

## Identidad, referidos y región

### 32. Avisos y de dónde sale el email

**Pregunta:** sin KYC, a qué email se mandan los avisos (plazo de activación, fin de ventana, pago listo), qué canales hay y si vienen activados.

**Pantallas:** F02 04 (punto de no leído), F04 03, 06 y 07, F07 01, F08 03.

**Opciones:** email de Privy si entró con email; email opcional en ajustes; solo avisos en la app.

**Recomiendo:** email de Privy si existe, o uno opcional en ajustes, con los avisos de plazos activados por defecto y además la campana de la app. Perder una plaza por no enterarse del plazo de 48 horas es el peor resultado posible para el producto.

### 33. Política de alias

**Pregunta:** qué alias están reservados (bitso, onchain, admin), cómo se evita suplantar a los primeros del ranking, cada cuánto se puede cambiar y qué pasa con los enlaces /r/ antiguos.

**Pantallas:** F02 05, F03 02 y 03, tarjetas para compartir.

**Opciones:** cambio libre, una vez por temporada o nunca; enlaces antiguos redirigen o caducan.

**Recomiendo:** lista de reservados más bloqueo de alias parecidos a los del top 60, un cambio por temporada, y los enlaces antiguos siguen funcionando. El alias es la identidad pública y los enlaces de referido ya están compartidos en X.

### 34. Reglas del referido

**Pregunta:** qué enlace tiene un trader sin alias, cuánto dura la atribución, se puede añadir el referido después de registrarse, y cuándo y dónde se paga el 1bp.

**Pantallas:** F02 04 y 05, F04 06, F08 05, F07 02 (tarjetas con enlace).

**Opciones:** enlace con la wallet o sin enlace hasta tener alias; atribución permanente o por plazo; pago mensual o con cada pago del financiado.

**Recomiendo:** enlace con la wallet acortada mientras no hay alias, atribución permanente al primer acceso y sin añadirla después, pago mensual en USDC a la wallet de onchain.cc en las mismas fechas que los pagos. Añadir el referido más tarde se presta a pactos entre amigos, y un solo calendario de pagos es más fácil de entender.

### 35. Entrar con otro método de acceso

**Pregunta:** si alguien entra en funded.onchain.cc con un método de Privy distinto al de onchain.cc, se pueden vincular las cuentas o pierde su historial.

**Pantallas:** F01 04 (inicio de sesión), F02 01.

**Opciones:** vincular en Privy; avisar y nada más.

**Recomiendo:** permitir vincular métodos en Privy y avisar al entrar con una cuenta sin historial. El historial de onchain.cc es lo que hace atractivo el producto desde el primer día.

### 36. Términos legales y VPN

**Pregunta:** hay términos de servicio y política de privacidad aparte de las reglas de la temporada, y qué pasa si alguien usa VPN para saltarse el bloqueo de EE. UU.

**Pantallas:** F01 01, 03 y 04, F04 02.

**Opciones:** solo reglas de temporada; términos completos; VPN tolerada, cierre o pérdida de beneficio.

**Recomiendo:** términos y privacidad propios enlazados en el pie y en la firma, y usar VPN para saltarse el bloqueo es incumplimiento: cierre de la cuenta y beneficio no pagado para Bitso. Es la cláusula estándar de las firmas de prop con exclusiones por país y protege a Bitso sin pedir identidad.

### 37. Depósitos desde otras redes

**Pregunta:** qué puente se usa para depositar desde otra red, la comisión del 0,1% es real y Solana está entre los orígenes.

**Pantallas:** F02 02 (depósito).

**Opciones:** puente de terceros integrado; solo Arbitrum al principio.

**Recomiendo:** solo las redes que ya soporte el depósito de onchain.cc, con la comisión real del proveedor mostrada en el resumen. No conviene inventar en las maquetas un origen o una comisión que el producto principal no tiene.
