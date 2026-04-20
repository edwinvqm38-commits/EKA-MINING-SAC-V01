# 26. Plan de Implementacion por Archivos Reales

## Proposito
Este documento traduce la inspeccion real de `02_APP_REAL` y el
backlog priorizado del MVP del Expediente de Cotizacion en un plan
concreto por archivos y capas reales.

La meta es saber exactamente que tocar primero, en que orden y con
que nivel de riesgo. No se trata de rehacer la app desde cero.
La app actual ya tiene una base util: auth, layout, cotizaciones,
seguimiento, comunicaciones, permisos y trazabilidad. Lo nuevo debe
entrar solo donde realmente falta.

## Alcance
Este plan cubre solo la primera implementacion operativa del MVP del
Expediente de Cotizacion sobre la app actual.

Incluye:

- entrada al expediente desde la cotizacion,
- reutilizacion del layout y tabs actuales,
- control minimo de estados,
- trazabilidad basica,
- evidencias y documentos,
- y preparacion tecnica para el storage real.

Queda fuera:

- redisenio completo,
- dashboard avanzado,
- exportaciones sofisticadas,
- automatizacion compleja,
- y agentes IA completos.

## Criterios de Intervencion Minima
Para no sobredimensionar el trabajo, el orden de intervencion sigue
estas reglas:

1. Primero desbloquear la navegacion real del expediente.
2. Luego asegurar que los datos y estados tengan sentido.
3. Despues formalizar documentos y trazabilidad.
4. Al final, pulir visualmente y preparar extensiones.

Definicion de tipo de accion:

- Reutilizar: existe y puede usarse casi igual.
- Adaptar: existe, pero necesita ajuste funcional o tecnico.
- Crear nuevo: no existe o no alcanza para el MVP.

## Plan Principal por Archivos Reales

```text
+----+-----------------------------+--------------------------------+-----------------------------------+-------------+----------+--------+---------------------------+------------------------------+
| N° | Archivo o capa              | Que existe hoy                | Que debe hacerse                  | Tipo        | Prioridad| Riesgo | Resultado esperado        | Observaciones                |
+----+-----------------------------+--------------------------------+-----------------------------------+-------------+----------+--------+---------------------------+------------------------------+
| 1  | index.html                  | SPA con sidebar, workspace,   | Ajustar la entrada visible al     | Adaptar     | P1       | Medio  | La cotizacion abre el     | Asumido temporalmente que   |
|    |                             | tabs, modales y vistas base.   | expediente desde cotizacion y     |             |          |        | expediente sin friccion   | la vista actual sera la     |
|    |                             |                                | dejar claro el flujo principal.   |             |          |        |                           | puerta de entrada            |
| 2  | app.js                      | Logica principal de UI, auth,  | Separar mejor el contexto del     | Adaptar     | P1       | Alto   | Expediente navegable      | Requiere revisar la mezcla   |
|    |                             | permisos, tablas, tabs y       | expediente, estados, eventos,     |             |          |        | con datos y reglas reales  | de demasiada logica en un    |
|    |                             | modal de expediente.           | y relacion cotizacion-RQ.         |             |          |        |                           | solo archivo                 |
| 3  | app.js                      | Seguimiento, comunicaciones,   | Formalizar el expediente con      | Reutilizar  | P1       | Medio  | Timeline visible y         | Ya existe la base tecnica    |
|    |                             | evidencias y adjuntos heredados.| tabs y acciones ya existentes.    |             |          |        | trazable                  | del expediente               |
| 4  | app.js                      | Recursos y requerimientos      | Conectar expediente con recursos  | Adaptar     | P2       | Medio  | Recursos reutilizados      | Sirve para items y sustento  |
|    |                             | reutilizables.                 | y adjuntos del requerimiento.     |             |          |        | dentro del RQ              | documental                    |
| 5  | styles.css                  | Estilos de la SPA, paneles,    | Hacer ajustes puntuales para      | Reutilizar  | P2       | Bajo   | El expediente se lee       | No conviene redisenar toda   |
|    |                             | tablas, modales y expediente.   | que el expediente se lea mejor    |             |          |        | mejor sin tocar la base    | la interfaz                  |
| 6  | SQL / Supabase              | Tablas, vistas, RLS, perfiles, | Alinear `cotizaciones`,           | Adaptar     | P1       | Alto   | Lectura y escritura        | Requiere validar vistas y    |
|    |                             | requerimientos y Fase 1A       | `requerimientos_log`, items,      |             |          |        | consistentes con RLS       | politicas reales             |
|    |                             | para trazabilidad.             | views y politicas.                |             |          |        |                           |                              |
| 7  | SQL / Supabase              | Existe base Fase 1A para       | Confirmar o ampliar tablas de     | Crear nuevo | P1       | Alto   | Base real de documentos    | Storage real aun no queda    |
|    |                             | seguimiento y evidencias.       | `seguimiento_eventos` y           |             |          |        | y evidencias persistentes   | resuelto con la base actual  |
|    |                             |                                | `evidencias_relacionadas`.       |             |          |        |                           |                              |
| 8  | SQL / Supabase              | Requerimiento items y vistas    | Preparar modelo para storage       | Crear nuevo | P1       | Alto   | Archivos ligados a         | Requiere revision tecnica    |
|    |                             | del detalle.                   | documental real y versionado.     |             |          |        | cotizacion, RQ o evento    | previa                        |
| 9  | Gestion documental / storage | Hoy hay URLs, data URLs y      | Pasar a subida real en storage    | Crear nuevo | P1       | Alto   | Documentos seguros y       | Es la brecha mas critica     |
|    |                             | adjuntos heredados.             | con metadata y relacion formal.   |             |          |        | persistentes               | del MVP                      |
| 10 | Estados y trazabilidad       | Hay timeline y alertas, pero   | Definir estados minimos del       | Crear nuevo | P1       | Alto   | Flujo de estado claro      | Pendiente de validar nombres |
|    |                             | no un flujo formal completo.    | expediente y motivo de cambios.   |             |          |        | de expediente              | y transiciones               |
| 11 | Estados y trazabilidad       | Deep links, tabs y eventos     | Mantener trazabilidad de           | Reutilizar  | P2       | Bajo   | Abrir casos exactos por    | Ya existe parte de esto      |
|    |                             | ya existen parcialmente.        | caso con hash y evento.          |             |          |        | enlace                     |                              |
| 12 | app.js + SQL                 | Permisos por rol y por modulo   | Alinear UI con RLS para que       | Adaptar     | P1       | Medio  | Seguridad coherente entre  | No debe haber UI permitiendo |
|    |                             | ya existen.                     | no haya permisos inconsistentes.  |             |          |        | pantalla y base            | algo que la base niega       |
| 13 | app.js                       | Vista de resumen y modales     | Convertir la vista de cotizacion   | Adaptar     | P2       | Medio  | Home util del expediente   | No es una app nueva, es      |
|    |                             | ya muestran parte del contexto.  | en home operativo del expediente. |             |          |        | dentro de la SPA           | una adaptacion               |
| 14 | app.js                       | Exportaciones y print ya        | Dejar solo lo minimo necesario    | Dejar fuera | P3       | Bajo   | No se pierde tiempo en    | Se pospone para no dispersar |
|    |                             | existen en partes del flujo.    | para el MVP inicial.              |             |          |        | extras tempranos          | el foco                      |
| 15 | styles.css                   | Lenguaje visual ya definido.    | Ajustes menores de espaciado,     | Adaptar     | P3       | Bajo   | Mejor legibilidad sin      | No es prioridad frente al    |
|    |                             |                                | jerarquia y lectura.              |             |          |        | redisenio total            | flujo funcional              |
+----+-----------------------------+--------------------------------+-----------------------------------+-------------+----------+--------+---------------------------+------------------------------+
```

Notas de validacion:

- Esta tabla prioriza lo que desbloquea el expediente real primero.
- Si el backend no esta alineado, la UI no debe avanzar demasiado.
- `app.js` aparece varias veces porque concentra la logica central
  actual y es el archivo mas sensible del MVP.

## index.html

### Que existe hoy
- Shell principal de la SPA.
- Sidebar, workspace, auth shell, vistas y modales.
- Tabs para cotizaciones, requerimientos, detalle, recursos,
  admin y proveedores.

### Que debe hacerse
- Confirmar la entrada visual del expediente desde la cotizacion.
- Mantener la estructura actual y evitar una nueva pantalla base.
- Ajustar textos y jerarquia para que el expediente sea el centro.

### Validacion
- No se necesita reconstruir el HTML completo.
- Solo se debe mover el foco visual hacia el expediente.

## app.js

### Que existe hoy
- Logica de auth, permisos, tablas, filtros, orden, tabs,
  modales, seguimiento, comunicaciones, evidencias y recursos.
- Integracion parcial con Supabase.
- Fallback local para cuando la configuracion no existe.

### Que debe hacerse
- Separar mejor el contexto de expediente.
- Formalizar estados minimos y cambios de estado.
- Conectar cotizacion, RQ, seguimiento y evidencia con una
  narrativa funcional unica.
- Reducir el riesgo de que todo siga en un solo archivo demasiado
  cargado.

### Validacion
- Este es el archivo mas importante del MVP.
- Si el orden de trabajo falla aqui, todo lo demas queda frágil.

## styles.css

### Que existe hoy
- Estilos completos para la SPA, incluyendo tabs, modales, tablas,
  paneles y estructura visual del expediente.

### Que debe hacerse
- Solo ajustes de soporte visual.
- Mejorar lectura, jerarquia y espacio del expediente.
- Evitar redisenar la app.

### Validacion
- El CSS no debe liderar el esfuerzo.
- Debe acompañar la implementacion funcional, no reemplazarla.

## SQL / Supabase

### Que existe hoy
- Tablas y politicas para usuarios, cotizaciones, requerimientos,
  items, trazabilidad y Fase 1A.
- Vistas para requerimientos y detalle.
- RLS ya presente en varias capas.

### Que debe hacerse
- Alinear la fuente real de cotizaciones y requerimientos.
- Confirmar tablas/vistas que alimentan el expediente.
- Revisar RLS para que la UI no prometa mas de lo permitido.

### Validacion
- Si SQL no esta bien cerrado, el MVP puede verse bien pero fallar
  al guardar o leer datos.
- Esto requiere revision tecnica previa antes de tocar pantalla fina.

## Gestion documental / Storage

### Que existe hoy
- URLs, data URLs, adjuntos heredados y referencias textuales.
- Evidencias y recursos reutilizan parte de esa logica.

### Que debe hacerse
- Crear storage real en Supabase.
- Guardar archivo, metadata y relacion con expediente.
- Mantener compatibilidad con el legado sin romperlo.

### Validacion
- Esta es una creacion nueva imprescindible.
- No conviene seguir dependiendo solo de enlaces o data URLs.

## Estados y trazabilidad

### Que existe hoy
- Timeline, comunicaciones, evidencias, alertas de importacion y
  tabs del expediente.

### Que debe hacerse
- Definir estados minimos del expediente.
- Registrar motivo de cambio.
- Asegurar que cada evento deje historia util.

### Validacion
- Sin estados formales, la vista ejecutiva no tendra base real.
- Esta capa debe quedar antes que cualquier automatizacion.

## Primer bloque a tocar

El primer archivo a intervenir debe ser `app.js`.

### Por que primero
- Ahí vive la logica que conecta cotizacion, RQ, expediente,
  permisos y trazabilidad.
- Es el archivo que mas impacto tiene sobre el MVP.
- Si primero se afina `app.js`, luego `index.html`, `styles.css` y
  SQL se ajustan con menos riesgo.

### Orden recomendado dentro del primer bloque
1. Aclarar el contexto del expediente.
2. Formalizar estados minimos.
3. Revisar permisos y trazabilidad.
4. Asegurar que la vista relacionada siga funcionando.

## Intervenciones minimas para sacar el MVP

Para una primera entrega, lo imprescindible es:

- entrar al expediente desde la cotizacion,
- ver resumen, seguimiento y evidencias,
- conservar permisos por rol,
- leer datos reales desde Supabase,
- y dejar una base de estados minima.

En terminos de archivos:

- `app.js`: principal ajuste funcional.
- `index.html`: solo lo necesario para enfocar el expediente.
- `SQL / Supabase`: asegurar datos, vistas, RLS y bases de trazabilidad.
- `styles.css`: soporte visual minimo.

### Validacion
- Si esto funciona, ya existe un MVP operativo.
- Todo lo demas puede crecer despues sin rehacer la base.

## Intervenciones que deben esperar

Estas tareas deben esperar a que el MVP exista y se valide:

- pulido visual fino,
- dashboard avanzado,
- exportaciones sofisticadas,
- automatizaciones complejas,
- agentes IA completos,
- BI formal,
- y redisenio total de la app.

### Validacion
- Si se atacan antes, consumen tiempo y no resuelven el problema
  principal del expediente.

## Resumen del orden de intervencion

Orden recomendado:

1. `app.js`
2. `SQL / Supabase`
3. `index.html`
4. `gestion documental / storage`
5. `estados y trazabilidad`
6. `styles.css`

### Archivo que debe tocarse primero
`app.js`.

### Riesgos si se altera el orden
- UI bonita sin base funcional.
- Estados sin soporte real en datos.
- Documentos sin storage confiable.
- Permisos inconsistentes entre pantalla y base.
- Tiempo perdido en pulido antes de que el expediente funcione.

## Secuencia recomendada para empezar implementacion real

1. Revisar y cerrar la capa SQL/Supabase del expediente.
2. Ajustar `app.js` para que el expediente tenga contexto claro.
3. Afinar `index.html` solo donde haga falta para la entrada.
4. Implementar storage documental real.
5. Formalizar estados y trazabilidad minima.
6. Hacer los ajustes de `styles.css` al final.

## Cierre
Este plan existe para evitar dos errores comunes:

- construir demasiado pronto sobre una base incompleta,
- o gastar tiempo en una capa visual que no resuelve el flujo real.

Si seguimos este orden, el MVP del Expediente de Cotizacion puede
nacer sobre la app real existente, reutilizando lo que ya sirve y
creando solo lo que falta de verdad.
