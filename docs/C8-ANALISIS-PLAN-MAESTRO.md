# C8 — Análisis completo y plan maestro

Estado: aprobado como plan de trabajo interno — 2026-08-09  
Implementación: pendiente de comenzar después de validar el circuito operativo con una prueba controlada.

## 1. Decisión ejecutiva

C8 será una bandeja interna para registrar y seguir pedidos que llegan por WhatsApp. El cliente seguirá usando WhatsApp y el menú público seguirá funcionando como en C7.

La primera versión no tendrá integración automática con WhatsApp. Una persona del local copiará o transcribirá el pedido recibido y lo registrará en Foodtrack. Así validamos la operación sin depender de APIs, webhooks, proveedores externos ni costos de infraestructura.

## 2. Problema que resuelve

C7 resuelve la consulta del menú y la composición de un mensaje. C8 resuelve el paso posterior: que el local no pierda pedidos, pueda distinguir qué debe atender y conozca en qué estado está cada pedido.

El sistema debe responder rápidamente qué pedidos están pendientes, qué contiene cada uno, qué falta hacer y qué pedidos fueron cancelados o completados.

## 3. Decisiones base — no se vuelven a discutir durante el MVP

| Tema | Decisión C8 |
|---|---|
| Canal del cliente | WhatsApp continúa siendo externo a Foodtrack |
| Ingreso inicial | Carga manual desde el panel administrativo |
| Confirmación | Acción explícita del operador; enviar mensaje no confirma un pedido |
| Usuario | Un único rol `admin` con permisos operativos completos |
| Estados | `RECIBIDO`, `CONFIRMADO`, `EN_PREPARACION`, `LISTO`, `ENTREGADO`, `CANCELADO` |
| Cancelación | Permitida desde estados activos, con motivo obligatorio |
| Corrección | Se edita antes de finalizar; se registra el cambio |
| Precio | Snapshot al registrar; correcciones auditadas |
| Cliente | Nombre y teléfono opcionales; no se crea cuenta |
| Modalidad | `RETIRO` y `CONSUMO_LOCAL`; `DELIVERY` queda fuera |
| Mesa | Campo opcional únicamente para consumo local |
| Notificaciones | No hay automatización; el operador responde por WhatsApp |
| Persistencia | PostgreSQL existente mediante Prisma |
| Producción | No se habilita por C8; primero local/demo |

Estas decisiones son suficientes para construir. Los datos faltantes se resuelven con campos opcionales y no bloquean el desarrollo.

## 4. Alcance funcional cerrado

### Incluido

1. Crear un pedido manual desde administración.
2. Cargar contacto, modalidad, mesa opcional, observaciones y líneas.
3. Agregar productos del catálogo con snapshot de nombre, precio y modificadores.
4. Calcular un total informativo persistido.
5. Ver pedidos en una bandeja ordenada por prioridad y fecha.
6. Filtrar por estado y buscar por identificador, nombre o teléfono.
7. Abrir el detalle de un pedido.
8. Cambiar el estado mediante transiciones válidas.
9. Cancelar con motivo obligatorio.
10. Ver historial de cambios.
11. Mantener el menú público y C7 sin regresiones.

### Fuera de alcance

- API oficial, webhook o lectura automática de WhatsApp.
- Bot, respuestas automáticas o plantillas enviadas desde Foodtrack.
- Pagos, señas, reembolsos o conciliación.
- Delivery, zonas, costo de envío o geolocalización.
- POS, KDS, impresora o integración de cocina.
- Stock, recetas o control de insumos.
- Clientes registrados, fidelización o campañas.
- Múltiples sucursales, turnos o permisos avanzados.
- Reportes financieros y analítica avanzada.

## 5. Flujo operativo definido

```text
WhatsApp recibe consulta/pedido
        ↓
Operador crea pedido en Foodtrack
        ↓
RECIBIDO → CONFIRMADO → EN_PREPARACION → LISTO → ENTREGADO
        └──────────────────────────────→ CANCELADO
```

Reglas:

- `RECIBIDO` es el estado inicial.
- Solo un pedido `RECIBIDO` pasa a `CONFIRMADO`.
- `CONFIRMADO` pasa a `EN_PREPARACION`, luego a `LISTO` y después a `ENTREGADO`.
- `RECIBIDO`, `CONFIRMADO` y `EN_PREPARACION` pueden cancelarse.
- `LISTO` puede cancelarse solo como excepción y con motivo.
- `ENTREGADO` y `CANCELADO` son estados finales del MVP.
- No se permite volver atrás en la primera versión; una corrección conserva el historial.

## 6. Modelo de información mínimo

### Pedido

`id`, `displayId` legible como `TL-0001`, estado, modalidad, nombre, teléfono, mesa, observaciones, subtotal, ajustes, total informativo, fechas de recepción/confirmación/cierre, usuario creador, última actualización y motivo de cancelación.

### Línea de pedido

Producto de referencia opcional, nombre y precio snapshot, cantidad, modificadores snapshot y observación opcional.

### Evento de pedido

Pedido, estado anterior/nuevo, usuario, fecha/hora y motivo o nota opcional.

El snapshot es obligatorio: si el catálogo cambia después, el pedido histórico no debe cambiar.

## 7. UX/UI a diseñar

Se agregan a `pantallas.pen` únicamente estas vistas:

1. Bandeja de pedidos: filtros, estados, prioridad y estado vacío.
2. Alta de pedido: datos operativos y constructor de líneas.
3. Detalle: resumen, acciones y timeline.
4. Estados de error, carga, cancelación y confirmación.
5. Responsive mínimo para notebook o teléfono del local.

Decisiones de UX ya fijadas: la bandeja es la pantalla inicial; el estado siempre tiene texto; las acciones peligrosas requieren confirmación; el historial permanece visible; el formulario prioriza velocidad sobre configuración avanzada.

## 8. Plan de construcción lineal

### C8-01 — Contrato y esquema

Crear tipos, validaciones y migración Prisma para pedido, líneas y eventos. Salida: esquema migrado, seed de pedido de ejemplo y pruebas de validación.

### C8-02 — Máquina de estados

Implementar transiciones válidas, permisos, cancelación y eventos. Salida: pruebas unitarias de transiciones válidas e inválidas.

### C8-03 — Alta manual

Construir la carga usando el catálogo vigente y snapshots. Salida: un admin crea un pedido `RECIBIDO` localmente.

### C8-04 — Bandeja y detalle

Construir listado, filtros, búsqueda, detalle y acciones. Salida: flujo operativo completo con datos locales.

### C8-05 — Auditoría y robustez

Agregar historial visible, errores, estados vacíos, doble envío, refresh, sesión expirada y validación server-side.

### C8-06 — QA, demo y continuidad

Ejecutar criterios C8, probar junto con C7 y documentar observaciones. Solo después se decide si hace falta adaptar el modelo o pasar a producción.

## 9. Criterios de aceptación

- Un admin crea un pedido con al menos una línea.
- Se conservan nombre, precio, cantidad y modificadores originales.
- El pedido aparece con identificador legible.
- Las transiciones inválidas son rechazadas en servidor.
- Cada cambio deja usuario, fecha y estado anterior/nuevo.
- Cancelar exige motivo y queda visible.
- El listado filtra por estado y busca por identificador.
- Un refresh no pierde pedido ni historial.
- Menú público, CTA y composer de C7 siguen funcionando.
- `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm audit --audit-level=high` y `pnpm build` pasan.
- La demo local funciona sin datos reales ni servicios pagos.

## 10. Riesgos y mitigaciones

| Riesgo | Mitigación |
|---|---|
| El operador no carga pedidos por demora | Alta rápida, catálogo reutilizado y pocos campos obligatorios |
| Se interpreta WhatsApp enviado como confirmado | Estado inicial explícito `RECIBIDO` y confirmación manual |
| El menú cambia y altera históricos | Snapshots en líneas y eventos |
| C8 se convierte en un POS | Lista de fuera de alcance y gate de continuidad |
| Faltan datos comerciales | Campos opcionales y defaults de demo |
| Dos pestañas actualizan un pedido | Validación server-side; concurrencia avanzada queda posterior |

## 11. Inputs y defaults

Para demo se usarán Taco Loco, teléfono `2615956912`, ARS, retiro y consumo local. Nombre, teléfono y mesa son opcionales. Email administrativo, dominio, R2 y producción quedan fuera del gate C8.

Antes de una prueba con operación real solo se debe confirmar quién carga los pedidos y si el local usa retiro, mesa o ambas modalidades. Si no se confirma, se prueba con retiro y datos opcionales.

## 12. Gates

### Para empezar

Este plan aprobado, base local disponible y usuario admin de demo. No hace falta decidir pagos, dominio, R2, email ni integración WhatsApp.

### Para cerrar C8 MVP

Flujo completo local, QA funcional y regresión de C7 en verde, demo interna realizada, observaciones registradas y decisión separada sobre C9.

## 13. Próximo paso único

Comenzar por `C8-01 — Contrato y esquema` y crear la migración local. No se abre otra ronda de definición: se usan estos defaults y solo se reabre una decisión si una prueba concreta demuestra que el flujo no sirve.
