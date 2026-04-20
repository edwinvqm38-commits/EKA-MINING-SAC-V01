# 27. Plan de Migracion Minima SQL Expediente

## Proposito
Este documento define una migracion minima y segura para estabilizar la
lectura del Expediente de Cotizacion en Supabase.

La idea no es rehacer la base de datos. La base actual ya sirve para un
MVP, pero esta repartida entre cotizaciones, requerimientos, timeline y
evidencias. Por eso el primer paso no debe ser crear una tabla raiz
definitiva, sino consolidar una vista canonica que unifique la lectura.

## Alcance
Este plan cubre solo la capa SQL necesaria para que el expediente se lea
de forma consistente y pueda crecer sin romper la base actual.

Incluye:

- unificacion de lectura de cotizacion, requerimiento, timeline y
  evidencias,
- exposicion de estado operativo visible,
- soporte minimo de trazabilidad,
- preparacion de base documental real,
- y preparacion futura para estados formales, aprobacion y cierre.

Queda fuera:

- reestructuracion total,
- tabla raiz definitiva del expediente,
- scoring complejo,
- automatizacion IA,
- y dashboard avanzado.

## Criterios de Migracion Minima
Para mantener el riesgo bajo, esta migracion sigue estas reglas:

1. Primero que funcione.
2. Luego que sea mantenible.
3. Luego que sea reusable.

Principios operativos:

- No eliminar tablas actuales.
- No romper adjuntos legacy.
- No cambiar la logica funcional que ya usa la app.
- No introducir una entidad nueva si una vista resuelve el problema.
- No mezclar la capa de lectura con la capa de reescritura del modelo.

## Plan de Intervencion SQL por Orden Recomendado

```text
+----+----------------------------------------+-------------+-----------------------------------+---------------------------+--------+-----------------------------+--------------------------------+
| N° | Objeto SQL o cambio propuesto          | Tipo        | Objetivo                          | Dependencias              | Riesgo | Resultado esperado          | Observaciones                  |
+----+----------------------------------------+-------------+-----------------------------------+---------------------------+--------+-----------------------------+--------------------------------+
| 1  | Vista canonica del expediente          | Crear nuevo | Unificar la lectura del           | cotizaciones,             | Medio  | Una sola fuente de lectura  | Primera jugada recomendada.    |
|    | `vw_expediente_cotizacion_base`       |             | expediente sin tocar tablas       | requerimientos_log,       |        | para cotizacion + RQ +      | Debe priorizar lectura, no     |
|    |                                        |             | existentes.                       | seguimiento_eventos,      |        | timeline + evidencias       | escritura.                     |
|    |                                        |             |                                   | evidencias_relacionadas   |        |                             |                                |
| 2  | Unificacion de cabecera + detalle      | Adaptar     | Exponer cabecera operativa,       | Vista canonica, tablas    | Medio  | Lectura consistente de      | Puede construirse como una     |
|    | por cotizacion y requerimiento         |             | detalle y relacion entre ambos.   | existentes                |        | cabecera y detalle          | vista o como vistas auxiliares |
| 3  | Exposicion de estado operativo visible | Adaptar     | Mostrar un estado util para       | cotizaciones.status_cot,  | Medio  | El expediente tiene un      | Estado visible no es aun       |
|    |                                        |             | negocio sin inventar una maquina   | requerimientos_log.estado |        | estado legible y estable    | workflow formal.               |
|    |                                        |             | de estados completa.              |                           |        |                             |                                |
| 4  | Soporte minimo de trazabilidad         | Reutilizar  | Consolidar el timeline ya         | seguimiento_eventos       | Bajo   | Historial unico por caso    | Ya existe la tabla Fase 1A.    |
|    | de eventos                             |             | disponible como base del expediente.|                           |        | con registro operativo      | Falta solo lectura canónica.   |
| 5  | Preparacion documental real            | Adaptar     | Exponer evidencias nuevas y       | evidencias_relacionadas,  | Medio  | Documentos ligados al       | Debe convivir con legacy.      |
|    |                                        |             | adjuntos legacy en una misma      | requerimiento_adjuntos    |        | expediente sin duplicar     |                                |
|    |                                        |             | lectura.                          |                           |        | la verdad documental        |                                |
| 6  | Relacion documental por evento         | Adaptar     | Permitir que una evidencia quede  | seguimiento_eventos,      | Medio  | Trazabilidad documental     | Ya existe el FK a evento.      |
|    | o expediente                           |             | vinculada a un evento o al root.  | evidencias_relacionadas   |        | mas precisa                 | Hay que normalizar lectura.    |
| 7  | Base de estados formales futura        | Crear nuevo  | Dejar espacio para estados,       | Vista canonica, timeline  | Alto   | Preparacion para flujo      | No crear aun tabla raiz.       |
|    |                                        |             | aprobacion y cierre, sin activarla.|                           |        | formal posterior            |                                |
| 8  | Preparacion para aprobacion y cierre   | Crear nuevo  | Reservar campos o vista para      | Estado operativo,         | Alto   | Base lista para la fase 2   | Debe quedar como extension,    |
|    |                                        |             | hitos de cierre futuro.           | timeline, evidencia       |        | del expediente              | no como obligacion ahora.      |
| 9  | Ajuste minimo de RLS para lectura      | Adaptar     | Confirmar que la nueva vista      | current_profile_active(), | Medio  | Lectura estable sin romper  | Requiere revision tecnica      |
|    | de la vista canonica                   |             | no contradiga permisos actuales.  | current_app_role()        |        | seguridad actual            | previa.                        |
| 10 | Base documental real en storage        | Crear nuevo  | Preparar la capa posterior de     | Supabase Storage,         | Alto   | Documentos persistentes y   | No implementar completo aqui.  |
|    | como siguiente paso tecnico            |             | archivos persistentes.            | evidencias_relacionadas   |        | consultables                | Se deja lista la ruta lógica.  |
+----+----------------------------------------+-------------+-----------------------------------+---------------------------+--------+-----------------------------+--------------------------------+
```

Notas de validacion:

- La fila 1 es la mas importante porque resuelve lectura estable
  sin mover el modelo completo.
- Las filas 7 a 10 no son para activar todo hoy; son una base de
  crecimiento ordenada.
- Si la vista canonica queda bien, la interfaz puede leer mejor sin
  depender de multiples consultas sueltas.

## Bloques Funcionales del Plan

### Vista canonica del expediente

### Que encontrara
- Una sola vista de lectura para el expediente.
- Datos de cotizacion, requerimiento, timeline y evidencias en un
  formato util para la app.

### Que si sirve
- Evita que el frontend arme el expediente con demasiadas consultas.
- Reduce el riesgo de resultados inconsistentes.

### Que requiere adaptacion
- Elegir con cuidado las llaves de union y los campos visibles.
- Decidir si el root de lectura parte de cotizacion o de RQ.

### Que falta
- Una entidad raiz formal definitiva.

### Que conviene hacer despues
- Usar esta vista como contrato estable para la UI y para futuros
  agentes.

### Unificacion de lectura de cotizacion + requerimiento + timeline + evidencias

### Que encontrara
- Cotizacion como cabecera comercial.
- Requerimiento como cabecera operativa.
- Timeline y evidencias como trazabilidad del expediente.

### Que si sirve
- Ya existe el material funcional para sostener el MVP.

### Que requiere adaptacion
- Normalizar el orden de lectura.
- Evitar duplicar la misma historia por varias rutas.

### Que falta
- Una lectura canónica unica y documentada.

### Que conviene hacer despues
- Exponer esta lectura como una sola fuente para `app.js`.

### Exposicion de estado operativo visible

### Que encontrara
- Estados dispersos en cotizacion, requerimiento e items.

### Que si sirve
- Permite mostrar el avance del caso sin inventar un workflow pesado.

### Que requiere adaptacion
- Definir un estado visible principal.

### Que falta
- Estados formales con transiciones y cierres.

### Que conviene hacer despues
- Derivar luego una tabla o catalogo formal de estados.

### Soporte minimo de trazabilidad

### Que encontrara
- `seguimiento_eventos` ya guarda eventos, actor, fecha y tipo.

### Que si sirve
- El expediente ya tiene bitacora.

### Que requiere adaptacion
- Ordenar la lectura por expediente y no por tabla suelta.

### Que falta
- Reglas mas formales de cambio y cierre.

### Que conviene hacer despues
- Consumir esa bitacora desde la vista canonica.

### Preparacion de base documental real

### Que encontrara
- `evidencias_relacionadas` ya existe.
- `requerimiento_adjuntos` sigue siendo la base legacy.

### Que si sirve
- Ya hay un puente entre lo nuevo y lo heredado.

### Que requiere adaptacion
- Unificar como se leen adjuntos nuevos y viejos.

### Que falta
- Storage consolidado y versionado formal.

### Que conviene hacer despues
- Hacer que la vista canonica exponga la parte documental de forma
  homogénea.

### Preparacion futura para estados formales

### Que encontrara
- Campos de estado ya distribuidos en varias tablas.

### Que si sirve
- Ayudan a crear una experiencia operativa inicial.

### Que requiere adaptacion
- Separar estado visible de estado tecnico.

### Que falta
- Catalogo y transiciones.

### Que conviene hacer despues
- Formalizar un modelo de estados cuando el MVP ya este estable.

### Preparacion futura para aprobacion y cierre

### Que encontrara
- Hitos de fecha y trazas de aprobacion parcial en requerimientos e
  items.

### Que si sirve
- Hay base para construir el cierre sin empezar de cero.

### Que requiere adaptacion
- Definir una logica minima de "listo / en revision / cerrado".

### Que falta
- Reglas de aprobacion y cierre como proceso formal.

### Que conviene hacer despues
- Agregar la capa de proceso despues de estabilizar la lectura.

## Primera Migracion Recomendada
La primera migracion recomendada es crear una vista canonica del
expediente, idealmente `vw_expediente_cotizacion_base`.

### Por que esta debe ser la primera
- Resuelve el problema real mas urgente: hoy la lectura esta repartida.
- No rompe las tablas actuales.
- Permite que `app.js` consuma un unico contrato de datos.
- Reduce el riesgo de duplicar consultas, estados y adjuntos.

### Que deberia incluir como minimo
- Cotizacion base.
- Requerimiento vinculado.
- Resumen de items.
- Ultimos eventos del timeline.
- Evidencias nuevas.
- Adjuntos legacy visibles.
- Estado operativo visible.

### Validacion
- Requiere revision tecnica previa para decidir la mejor forma de
  agrupar cotizacion y requerimiento.
- Puede empezar como vista simple y ampliarse despues.

## Lo que Explicitamente NO debe Tocarse Todavia

- No crear una tabla raiz definitiva del expediente.
- No hacer una reestructuracion total de la base.
- No implementar scoring complejo.
- No activar automatizacion IA.
- No construir dashboard avanzado.
- No migrar todo el legado a una sola pasada.
- No tocar la interfaz otra vez antes de estabilizar la lectura.

## Riesgos si se salta este Paso

- El frontend va a seguir armando el expediente con consultas
  dispersas y eso genera inconsistencias.
- Puede aparecer una vista bonita, pero con datos mezclados o
  incompletos.
- Los adjuntos legacy y los nuevos pueden quedar duplicados o
  separados sin criterio claro.
- Los estados pueden mostrarse como si fueran formales, cuando en
  realidad solo son textos sueltos.
- Cualquier agente futuro o vista ejecutiva dependera de una base
  poco confiable.

## Resumen Final

### Resumen del plan SQL minimo
- Crear una vista canonica.
- Unificar lectura de cotizacion, requerimiento, timeline y
  evidencias.
- Exponer un estado operativo visible.
- Mantener la trazabilidad actual.
- Preparar la capa documental sin romper el legado.

### Primer cambio recomendado
- Crear `vw_expediente_cotizacion_base`.

### Cambios que pueden esperar
- Tabla raiz definitiva del expediente.
- Estados formales completos.
- Aprobacion y cierre.
- Versionado documental complejo.
- IA y automatizacion avanzada.

### Secuencia recomendada antes de volver a tocar la interfaz
1. Crear la vista canonica.
2. Validar que la lectura devuelve el expediente completo.
3. Revisar que RLS no rompa la nueva lectura.
4. Confirmar evidencias y adjuntos legacy en la misma vista.
5. Recién despues volver a conectar la interfaz.
