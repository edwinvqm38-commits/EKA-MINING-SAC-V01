# 25. Backlog Priorizado del MVP Expediente de Cotizacion

## Proposito
Este documento convierte la inspeccion real de la app actual en un
backlog practico y ejecutable para construir el MVP del modulo
"Expediente de Cotizacion" sobre la app existente.

La idea no es rehacer la app desde cero. La app actual ya tiene una
SPA funcional, autenticacion, roles, cotizaciones, requerimientos,
seguimiento, comunicaciones, evidencias y una base de trazabilidad.
Por eso el backlog prioriza reutilizar primero, adaptar despues y
crear nuevo solo donde realmente falta capacidad.

## Alcance
El alcance de este backlog cubre solo el MVP operativo del expediente.
Incluye:

- ingreso al expediente desde la cotizacion,
- resumen y trazabilidad basica,
- seguimiento y comunicaciones,
- evidencias y documentos,
- control minimo de estados,
- vista ejecutiva minima,
- y preparacion tecnica para IA futura.

Queda fuera, por ahora, todo lo que sea automatizacion avanzada,
scoring sofisticado, n8n completo o agentes complejos.

## Criterios de Priorizacion
La prioridad se ordena con esta regla simple:

1. Primero que funcione.
2. Luego que sea mantenible.
3. Luego que sea reusable.

Definicion de prioridad:

- P1: bloqueante para que el MVP exista y se pueda usar.
- P2: importante para que el MVP sea operable y no frágil.
- P3: mejora de valor, pero no bloquea el arranque.

Clasificacion de tipo:

- Reutilizar: ya existe y se puede usar casi como esta.
- Adaptar: existe, pero necesita ajuste funcional o tecnico.
- Crear nuevo: no existe o no alcanza para el MVP.
- Dejar fuera por ahora: no entra en esta primera entrega.

## Backlog Principal por Fases

### Fase 1: Nucleo funcional del expediente
Objetivo: que el expediente pueda abrirse, leerse y navegarse sobre la
app real sin rehacer la base actual.

```text
+----+--------------------------------------+-------------+---------------------------+----------------------+----------+--------+---------------------------+------------------------------+
| N° | Tarea o capacidad                    | Tipo        | Objetivo                  | Dependencias         | Prioridad| Riesgo | Resultado esperado        | Observaciones                |
+----+--------------------------------------+-------------+---------------------------+----------------------+----------+--------+---------------------------+------------------------------+
| 1  | Definir entrada unica al expediente   | Adaptar     | Abrir el expediente desde | Cotizaciones y       | P1       | Medio  | La cotizacion se vuelve   | Asumido temporalmente: la    |
|    | desde la cotizacion                  |             | la cotizacion real        | vista relacionada    |          |        | la puerta de entrada      | vista actual sera el punto   |
|    |                                      |             |                           |                      |          |        | del expediente            | de acceso principal          |
| 2  | Reutilizar layout, sidebar y shells   | Reutilizar  | Aprovechar la estructura  | Ninguna critica       | P1       | Bajo   | El MVP usa la UI actual   | Ya existe la SPA y su layout |
|    | visuales actuales                     |             | visual actual             |                      |          |        | sin rehacer la app        | base                         |
| 3  | Unificar el contexto del expediente   | Crear nuevo  | Tener un contexto claro   | Vista relacionada,    | P1       | Medio  | Una cotizacion o RQ       | Requiere revision tecnica    |
|    | por cotizacion y por RQ               |             | por cotizacion y por RQ   | tabs, selects         |          |        | activa el expediente      | previa de entidades y llaves |
| 4  | Reutilizar tabs del expediente        | Reutilizar   | Usar Resumen / Seguim. /  | Expediente cargado    | P1       | Bajo   | Navegacion interna lista  | Ya existe en app.js          |
|    |                                      |             | Evidencias / Historial    |                      |          |        | para el MVP               |                              |
| 5  | Normalizar acceso a datos reales      | Adaptar      | Leer cotizaciones y       | Supabase config,      | P1       | Medio  | El expediente trabaja     | Requiere validar vistas y    |
|    | de cotizacion, requerimiento y items  |             | requerimientos desde      | tablas/vistas         |          |        | con datos reales          | fuentes reales               |
|    |                                      |             | Supabase con fallback     |                      |          |        |                           |                              |
| 6  | Reutilizar permisos base por rol      | Reutilizar   | Mantener acceso por rol   | user_profiles, RLS    | P1       | Medio  | Cada rol ve lo que        | Ya existe, pero debe quedar  |
|    | y por modulo                          |             | sin romper seguridad      |                      |          |        | corresponde               | alineado con la UI           |
| 7  | Reutilizar buscadores, filtros y      | Reutilizar   | Evitar desarrollar tablas | Tablas existentes     | P2       | Bajo   | Listados operables y      | Sirve para cotizaciones,     |
|    | ordenes ya existentes                 |             | nuevas desde cero         |                      |          |        | controlables              | RQ e items                   |
| 8  | Adaptar el resumen de cotizacion       | Adaptar      | Mostrar estado, base y    | Cotizacion activa,    | P2       | Bajo   | Vista resumen del         | Debe ser simple y clara      |
|    | como pantalla de contexto              |             | datos clave del caso      | expediente            |          |        | expediente                |                              |
| 9  | Reutilizar acciones basicas de         | Reutilizar   | Abrir, editar o consultar | Modal actual          | P2       | Bajo   | Acciones consistentes     | Ya existe logica para modal  |
|    | cotizacion y requerimiento             |             | sin cambiar el paradigma  |                      |          |        | con la UI actual          | y vista relacionada          |
| 10 | Definir convencion de estados         | Crear nuevo  | Establecer estados del    | Acuerdo funcional     | P1       | Alto   | Estados del expediente    | Pendiente de validar:       |
|    | del expediente                         |             | expediente                |                      |          |        | claros y visibles         | nombres y transiciones       |
+----+--------------------------------------+-------------+---------------------------+----------------------+----------+--------+---------------------------+------------------------------+
```

Notas de validacion:

- Esta fase debe dejar el expediente navegable aunque todavia sea
  simple.
- Si la entrada al expediente no queda clara, todo lo demas se
  dispersa.
- No conviene inventar mas pantallas antes de estabilizar este nucleo.

### Fase 2: Control operativo y estados
Objetivo: que el expediente tenga movimiento real, trazabilidad y una
logica minima de avance.

```text
+----+--------------------------------------+-------------+---------------------------+----------------------+----------+--------+---------------------------+------------------------------+
| N° | Tarea o capacidad                    | Tipo        | Objetivo                  | Dependencias         | Prioridad| Riesgo | Resultado esperado        | Observaciones                |
+----+--------------------------------------+-------------+---------------------------+----------------------+----------+--------+---------------------------+------------------------------+
| 11 | Formalizar timeline de seguimiento    | Reutilizar  | Registrar eventos         | seguimiento_eventos, | P1       | Medio  | Bitacora de eventos       | Ya existe la base tecnica    |
|    | operativo                             |             | operativos por expediente  | UI expediente         |          |        | por expediente            |                              |
| 12 | Separar seguimiento y comunicaciones  | Reutilizar  | Mantener ambos flujos     | Tabs del expediente   | P1       | Bajo   | Seguimiento y             | Ya existe en la app actual   |
|    | como subtipos visibles                |             | con lectura clara         |                      |          |        | comunicaciones claros     |                              |
| 13 | Registrar evidencia ligada al evento   | Adaptar      | Asociar evidencia a       | evidencias_relacionadas| P1       | Medio  | Evidencias con relacion   | Requiere revisar si el       |
|    | o al expediente                       |             | expediente o evento       | y contexto            |          |        | al expediente             | storage sera real            |
| 14 | Definir reglas minimas de avance      | Crear nuevo  | Pasar de un estado a      | Estados del expediente | P1       | Alto   | El usuario entiende       | Requiere revision funcional  |
|    | observacion, aprobacion, cierre       |             | otro con criterio         |                      |          |        | por que cambia el estado  | previa                       |
| 15 | Registrar motivo de cambio de estado  | Crear nuevo  | Dejar trazabilidad        | Timeline operativo    | P1       | Medio  | Cada cambio queda         | Necesario para auditoria     |
|    |                                      |             | del por que                |                      |          |        | explicado                 |                              |
| 16 | Mantener deep links y referencia RQ   | Reutilizar  | Permitir abrir un caso    | Hash actual, links     | P2       | Bajo   | El expediente se abre    | Ya existe parte de esto      |
|    |                                      |             | exacto por enlace         |                      |          |        | en contexto directo       |                              |
| 17 | Unificar revision de alertas          | Adaptar      | Mostrar "OK / Revisar"    | Import alerts, logs    | P2       | Medio  | Se visualiza riesgo       | Depende de datos de carga    |
|    | y pendientes                          |             | de forma consistente      |                      |          |        | operativo                 |                              |
| 18 | Definir actores del expediente        | Crear nuevo  | Aclarar quien registra,   | Roles actuales        | P2       | Medio  | Matriz simple de roles    | Asumido temporalmente:       |
|    | por rol                               |             | aprueba, observa o cierra |                      |          |        | y permisos                | admin/comercial/tecnico/log  |
+----+--------------------------------------+-------------+---------------------------+----------------------+----------+--------+---------------------------+------------------------------+
```

Notas de validacion:

- Sin esta fase, la vista ejecutiva quedaria bonita pero sin
  verdad operativa.
- Los estados tienen que responder a algo real, no solo a un color.
- Si los roles no quedan cerrados aqui, luego habra permisos
  incoherentes entre UI y base de datos.

### Fase 3: Gestion documental robusta
Objetivo: pasar de adjuntos y links sueltos a documentos confiables y
trazables.

```text
+----+--------------------------------------+-------------+---------------------------+----------------------+----------+--------+---------------------------+------------------------------+
| N° | Tarea o capacidad                    | Tipo        | Objetivo                  | Dependencias         | Prioridad| Riesgo | Resultado esperado        | Observaciones                |
+----+--------------------------------------+-------------+---------------------------+----------------------+----------+--------+---------------------------+------------------------------+
| 19 | Implementar storage documental real   | Crear nuevo  | Guardar archivos en       | Supabase Storage,    | P1       | Alto   | Documentos persistentes   | Esta es una brecha critica   |
|    | en Supabase                          |             | storage y no solo como    | buckets y permisos    |          |        | y consultables            | hoy                          |
|    |                                      |             | data URL                  |                      |          |        |                           |                              |
| 20 | Asociar documento a cotizacion, RQ o  | Crear nuevo  | Poder ligar cada archivo  | Storage real,         | P1       | Alto   | Trazabilidad documental   | Requiere revisar modelo      |
|    | evento especifico                     |             | al lugar correcto         | entidades del exp.    |          |        | completa                  | de datos                     |
| 21 | Mantener compatibilidad con adjuntos  | Adaptar      | No perder legacy          | requerimiento_adjuntos| P1       | Medio  | Los datos viejos siguen   | Importante para no romper    |
|    | heredados                              |             | existentes                | y JSON legacy         |          |        | visibles                  | el historial                 |
| 22 | Versionado minimo de documentos       | Crear nuevo  | Saber cual archivo es     | Storage real,         | P2       | Alto   | Se evitan sobrescrituras  | Debe ser simple en el MVP    |
|    |                                      |             | el vigente                | metadata              |          |        | silenciosas               |                              |
| 23 | Validar tipos, peso y metadata        | Adaptar      | Evitar archivos            | Upload real,          | P2       | Medio  | Control basico de        | Pendiente de validar         |
|    |                                      |             | peligrosos o impropios    | formularios           |          |        | calidad documental       | politicas tecnicas           |
| 24 | Vista documental por expediente       | Adaptar      | Mostrar documentos         | Tabs del expediente,  | P2       | Medio  | Bandeja documental       | Debe ser simple al inicio    |
|    |                                      |             | en orden util              | evidencias            |          |        | utilizable               |                              |
| 25 | Normalizar nombres, titulos y         | Adaptar      | Hacer buscable la          | Evidencias, metadata  | P3       | Bajo   | Documentos mas faciles    | Mejora de mantenibilidad     |
|    | categorias documentales               |             | gestion documental         |                      |          |        | de encontrar              |                              |
+----+--------------------------------------+-------------+---------------------------+----------------------+----------+--------+---------------------------+------------------------------+
```

Notas de validacion:

- Si no se formaliza storage, el MVP puede funcionar pero quedara
  fragil para produccion.
- Esta fase debe dejar de depender de "pegar enlaces" como solucion
  principal.
- Conviene validar bucket, politicas y tamanos antes de codificar.

### Fase 4: Vista ejecutiva minima
Objetivo: dar una lectura rapida al negocio sin convertir el MVP en
un BI completo.

```text
+----+--------------------------------------+-------------+---------------------------+----------------------+----------+--------+---------------------------+------------------------------+
| N° | Tarea o capacidad                    | Tipo        | Objetivo                  | Dependencias         | Prioridad| Riesgo | Resultado esperado        | Observaciones                |
+----+--------------------------------------+-------------+---------------------------+----------------------+----------+--------+---------------------------+------------------------------+
| 26 | Crear resumen ejecutivo del          | Crear nuevo  | Mostrar estado general,   | Estados, timeline,    | P2       | Medio  | Tarjeta o panel de       | Debe ser minimo y util      |
|    | expediente                            |             | hitos y pendientes        | documentos           |          |        | lectura rapida            |                              |
| 27 | Incorporar alertas basicas            | Adaptar      | Resaltar faltantes        | Import alerts, docs   | P2       | Medio  | Semaforo simple de       | No usar scoring complejo     |
|    | de completitud                        |             | de documentos o estado    |                      |          |        | completitud               |                              |
| 28 | Habilitar KPIs operativos minimos    | Adaptar      | Conteos simples: abiertos,| Datos reales,         | P3       | Bajo   | Dashboard util y         | Solo indicadores que ya      |
|    | en dashboard                          |             | en curso, cerrados        | expediente            |          |        | no ornamental             | se puedan sostener           |
| 29 | Preparar vista "listo para gerencia" | Crear nuevo  | Tener una version         | Resumen ejecutivo     | P2       | Medio  | Panel limpio para        | No es BI completo            |
|    |                                      |             | corta para decision       |                      |          |        | lectura directiva        |                              |
| 30 | Limitar exportaciones a lo           | Dejar fuera  | Evitar invertir tiempo    | Ninguna critica       | P3       | Bajo   | Se mantiene el foco      | Se pospone PDF/Excel         |
|    | estrictamente necesario              |             | en extras tempranos       |                      |          |        | del MVP                  | avanzado                     |
+----+--------------------------------------+-------------+---------------------------+----------------------+----------+--------+---------------------------+------------------------------+
```

Notas de validacion:

- La vista ejecutiva solo vale si resume algo que ya esta controlado.
- Si se arma antes de estados y documentos, sera cosmetica.
- No conviene convertir esta fase en un dashboard gigante.

### Fase 5: Preparacion para agentes IA
Objetivo: dejar una base util para IA futura, sin intentar automatizarlo
todo en esta primera implementacion.

```text
+----+--------------------------------------+-------------+---------------------------+----------------------+----------+--------+---------------------------+------------------------------+
| N° | Tarea o capacidad                    | Tipo        | Objetivo                  | Dependencias         | Prioridad| Riesgo | Resultado esperado        | Observaciones                |
+----+--------------------------------------+-------------+---------------------------+----------------------+----------+--------+---------------------------+------------------------------+
| 31 | Estandarizar estructura de contexto  | Crear nuevo  | Dar a IA un expediente    | Datos del expediente  | P3       | Medio  | Contexto consistente      | Requiere revisar schema      |
|    | para IA                              |             | legible y estable         |                      |          |        | para futuros agentes      | real                         |
| 32 | Etiquetado simple de eventos y docs   | Adaptar      | Marcar eventos por tipo,  | Timeline, evidencias  | P3       | Bajo   | Datos mejor organizados   | No es clasificacion avanzada |
|    |                                      |             | fecha y relevancia        |                      |          |        | para consumo IA           |                              |
| 33 | Preparar resumen automatico futuro    | Crear nuevo  | Dejar listas las salidas  | Resumen ejecutivo     | P3       | Medio  | Base para prompts         | No automatizar todavia       |
|    | del expediente                        |             | que IA podria usar        |                      |          |        | y agentes posteriores     |                              |
| 34 | Dejar puntos de extension para       | Crear nuevo  | Facilitar integraciones   | Arquitectura minima   | P3       | Bajo   | Base preparada para      | No implica n8n completo      |
|    | agentes e integraciones               |             | futuras sin acoplar       |                      |          |        | crecer                   |                              |
| 35 | Definir catalogo minimo de prompts    | Asumido     | Orientar futuros agentes  | Acuerdo funcional     | P3       | Bajo   | Linea base para IA       | Asumido temporalmente        |
|    | y salidas esperadas                   | temporalmente| con salidas predecibles   |                      |          |        |                          |                              |
+----+--------------------------------------+-------------+---------------------------+----------------------+----------+--------+---------------------------+------------------------------+
```

Notas de validacion:

- Esta fase no busca automatizar el proceso, solo dejar la app lista
  para que luego la IA pueda ayudar con contexto limpio.
- Si la informacion base llega desordenada, cualquier agente futuro
  tambien va a fallar.

## Primeras tareas que deben tocar el codigo real

Estas son las primeras piezas concretas que conviene intervenir:

- `index.html`: definir la entrada clara al expediente desde la
  cotizacion y, si hace falta, ajustar el orden visual de tabs y paneles.
- `app.js`: separar el contexto del expediente, formalizar estados
  minimos y conectar mejor cotizacion, RQ, seguimiento y evidencias.
- `styles.css`: solo ajustes de soporte para que la vista del expediente
  se lea mejor, sin redisenar la app completa.
- SQL de Supabase: asegurar tablas/vistas de expediente, storage real,
  RLS y trazabilidad documental antes de profundizar en UI.

Validacion corta:

- Si `app.js` no entiende bien el expediente, la UI solo va a
  maquillar el problema.
- Si SQL no queda solido, cualquier documento o estado sera frágil.
- `styles.css` debe acompañar, no liderar, esta primera etapa.

## Lo que explicitamente no entra en esta primera implementacion

- Automatizacion avanzada de aprobaciones.
- Scoring sofisticado de cotizaciones o expedientes.
- n8n completo o flujos externos complejos.
- Agentes IA autonomos con decision final.
- Motor de reglas pesado para multiples escenarios.
- BI formal o analitica ejecutiva profunda.
- Reingenieria completa de la app actual.
- Migracion total de historico legacy si no es necesaria para el MVP.

## Riesgos de implementar sin este orden

- Se puede construir una vista bonita sin expediente real detras.
- Se puede mostrar informacion sin trazabilidad confiable.
- Se puede duplicar logica entre cotizacion, requerimiento y evidencia.
- Se puede romper la seguridad si UI y RLS no quedan alineados.
- Se pueden perder documentos si storage real se deja para el final.
- Se puede gastar tiempo en dashboard o IA antes de tener estados y
  documentos consistentes.

## Resumen Ejecutivo del Backlog

El MVP del Expediente de Cotizacion debe arrancar por tres cosas:

1. Entrada unica y clara al expediente desde la cotizacion.
2. Trazabilidad operativa real con seguimiento, comunicaciones y
   evidencias.
3. Gestion documental confiable con storage real y estados minimos.

Lo reutilizable mas rapido ya existe en la app actual:

- auth, roles y administracion,
- layout y navegacion base,
- tablas con filtros y orden,
- modales y tabs de expediente,
- seguimiento y comunicaciones,
- reutilizacion de recursos y requerimientos.

Lo que exige creacion nueva desde cero:

- storage documental real,
- flujo formal de estados del expediente,
- versionado de documentos,
- cierre y aprobacion del expediente,
- y la base de preparacion para IA.

## Secuencia recomendada para empezar a tocar la app real

1. Alinear tablas, vistas y RLS de Supabase para expediente.
2. Definir la entrada unica al expediente desde la cotizacion.
3. Formalizar estados minimos y reglas de avance.
4. Pasar la gestion documental a storage real.
5. Recién despues, armar la vista ejecutiva minima.
6. Al final, preparar la capa de datos para IA futura.

## Capacidades que pueden salir rapido reutilizando lo actual

- abrir cotizacion y ver su contexto,
- navegar el expediente por tabs,
- ver seguimiento y comunicaciones,
- mostrar evidencias y adjuntos heredados,
- filtrar y ordenar tablas,
- aplicar permisos por rol,
- reutilizar recursos existentes en requerimientos.

## Capacidades que exigen creacion nueva

- storage documental real,
- versionado de documentos,
- reglas formales de estado del expediente,
- cierre y aprobacion,
- contexto IA listo para futuro,
- resumen ejecutivo minimalista pero confiable.

## Cierre
Este backlog esta pensado para que el proyecto avance con orden y sin
sobredimensionar el MVP. La regla es simple: primero expediente real,
luego control operativo, despues documentos robustos, y por ultimo
vista ejecutiva e IA.
