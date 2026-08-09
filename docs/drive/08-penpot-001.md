---
drive_title: PENPOT-001 — Prompts de ejecución UI — Taco Loco Foodtrack
drive_url: https://docs.google.com/document/d/1dZSbstwsGfWqstrie8Zf9ppL8jJF2o9Fk8JsTsLueao
source: Google Drive mirror
---

﻿PENPOT-001 — PROMPTS DE EJECUCIÓN UI
Taco Loco Foodtrack
CuyoConsulting and Development
Fecha: 08/08/2026
Estado: LISTO PARA USO FUTURO


PROPÓSITO
Conservar una secuencia de prompts autocontenidos para ejecutar en OpenCode cuando el MCP de Penpot sea estable. Los prompts materializan UI-001 y UX-001 sin cambiar alcance, flujos ni reglas de negocio.


REGLA DE USO
Ejecutar UN prompt por vez. Revisar el resultado antes de continuar con el siguiente. No autorizar al agente a avanzar automáticamente. Si una capacidad del MCP falla, debe informar la limitación y detener esa parte sin inventar una alternativa destructiva.


FUENTES CANÓNICAS DEL PROYECTO
- ALC-001 — Alcance funcional MVP — CERRADO.
- MEN-001 — Catálogo y modelo funcional del menú — CERRADO.
- UX-001 — Flujos críticos y arquitectura de experiencia — CERRADO.
- UI-001 — Dirección visual y especificación de interfaz — EN PROGRESO.
- PRE-DEV-002 — Proceso profesional, roles y gate de construcción.


DECISIONES QUE NINGÚN PROMPT PUEDE CAMBIAR
- Menú público QR, mobile-first, sin login.
- Menú público en una sola página con navegación rápida por categorías.
- No hay búsqueda pública.
- Producto comprensible desde el listado; no hay detalle obligatorio.
- Agotados siguen visibles.
- Destacados son opcionales y desaparecen si no existen.
- WhatsApp es CTA persistente hacia el canal actual; no hay carrito ni motor de pedidos.
- Admin autenticado; entra a Productos.
- Disponibilidad se puede cambiar directamente desde listado.
- Edición completa en formulario separado.
- No hay dashboard de métricas en MVP.
- Fuera de alcance: pedidos internos, carrito, KDS, POS, pagos, stock, delivery, analítica avanzada, multi-sucursal, microservicios, CQRS y Design System empresarial completo.


============================================================
PROMPT 00 — INSPECCIÓN Y PREPARACIÓN
============================================================
Usa el MCP penpot.


Trabaja únicamente sobre el archivo de Penpot actualmente conectado para “Taco Loco Foodtrack — UI MVP”.


Primero inspecciona el archivo. No modifiques nada todavía.


Devuelve:
1. nombre del archivo conectado;
2. páginas existentes;
3. tokens existentes;
4. componentes existentes;
5. estilos existentes;
6. capacidades de escritura que el MCP expone en esta sesión;
7. limitaciones detectadas.


No crees páginas ni elementos. No borres ni renombres nada.


Si el archivo correcto no está conectado, detente e indícalo.


============================================================
PROMPT 01 — 00 FOUNDATIONS
============================================================
Usa el MCP penpot.


Trabaja sobre el archivo “Taco Loco Foodtrack — UI MVP”. Crea o completa la página “00 — Foundations”. No diseñes todavía pantallas completas.


OBJETIVO VISUAL
“Taco Loco digital, no flyer reducido”. Conservar energía mexicana y personalidad de marca, pero priorizar lectura, jerarquía, velocidad y uso móvil. Evitar trasladar la densidad gráfica del flyer a la interfaz.


COLORES / TOKENS
Brand/Background #0E0E0D
Brand/Surface #181714
Brand/Surface-2 #211F19
Brand/Cream #F5E8C8
Brand/Muted #B9B09E
Brand/Green #25833F
Brand/Red #D5322C
Brand/Yellow #F4B72B
Brand/Border #3B3529
State/Danger #D94A40
State/Success #3B9B58


Regla: verde, rojo y amarillo son acentos. No convertir la interfaz en un mosaico cromático.


TIPOGRAFÍA
Display: Bebas Neue; si no está disponible, Oswald.
UI: Inter; si no está disponible, una sans serif neutra de alta legibilidad.
Crear como mínimo:
Display/Hero 32 px
Display/Category 26 px
UI/ProductName 18 px semibold
UI/Price 20 px bold
UI/Body 15 px
UI/BodySmall 14 px
UI/Label 13 px semibold
UI/Caption 12 px


ESPACIADO
Space/4=4
Space/8=8
Space/12=12
Space/16=16
Space/24=24
Space/32=32
Space/40=40
Space/48=48


RADIOS
Radius/Small=8
Radius/Medium=12
Radius/Card=16
Radius/Large=20
Radius/Pill=999


INTERACCIÓN
Touch/Minimum=44 px
Button/Height=48 px


Organiza visualmente la página en:
01 Colors
02 Typography
03 Spacing
04 Radius
05 Surfaces
06 Interaction sizes
07 Semantic states
08 Accessibility


Estados semánticos de ejemplo: Disponible, Agotado, Error, Éxito. Nunca solo por color.


Accessibility rules:
- contraste suficiente;
- focus visible;
- estados no solo por color;
- precios legibles sin zoom;
- texto corporal legible;
- controles táctiles >=44 px;
- no depender de hover;
- jerarquía semántica de encabezados.


Siempre que Penpot lo permita, usa Design Tokens reales, no solo muestras visuales. No crees aún ProductCard, menú, login ni admin.


Al terminar, resume qué creaste, qué valores quedaron como tokens reales y qué limitaciones tuvo el MCP. No continúes automáticamente.


============================================================
PROMPT 02 — 03 COMPONENTS / NÚCLEO DEL UI KIT
============================================================
Usa el MCP penpot.


Sobre el mismo archivo, crea o completa “03 — Components”. Usa exclusivamente los foundations aprobados de “00 — Foundations”.


Crea un UI Kit MÍNIMO, no un Design System corporativo.


COMPONENTES PÚBLICOS
- BrandHeader
- CategoryChip
- CategoryNav
- SectionHeading
- ProductCard
- FeaturedProductCard
- AvailabilityBadge
- ModifierHint
- SaucesInfo
- WhatsAppCTA
- LoadingState
- ErrorState


COMPONENTES ADMIN
- AdminHeader
- TextInput
- TextArea
- Select
- PriceInput
- Toggle
- Button: primary / secondary / destructive
- ProductAdminRow o ProductAdminCard
- FilterChip o FilterSelect
- ImageUploader
- Feedback / Toast
- EmptyState


PRODUCTCARD — patrón base
- tarjeta horizontal compacta;
- contenido a izquierda;
- imagen opcional a derecha de aproximadamente 96–112 px;
- nombre 18 px semibold;
- descripción breve 14–15 px;
- precio 18–20 px bold y muy visible;
- metadata breve de opciones cuando corresponda;
- Radius/Card;
- diferencia tonal/borde discreto, sin sombras pesadas.


Variantes ProductCard:
A. con imagen;
B. sin imagen;
C. destacado;
D. agotado.


CategoryChip: normal, active, focus, pressed.
Botones y controles: default, hover donde aplique, pressed, focus visible, disabled; loading/error cuando aplique.


AvailabilityBadge debe mostrar texto explícito, por ejemplo “Agotado”; no depender solo de rojo/verde.


WhatsAppCTA mobile: altura >=48 px, icono + “Pedir por WhatsApp”, alto contraste, preparado para barra persistente inferior y safe-area.


No construyas pantallas completas. No agregues componentes fuera de este alcance salvo que sean una dependencia técnica mínima de los anteriores; si ocurre, informa cuál y por qué.


Al terminar, enumera componentes y variantes creadas. No continúes automáticamente.


============================================================
PROMPT 03 — 01 PUBLIC MENU / UI-PUB-01 MOBILE 390
============================================================
Usa el MCP penpot.


Crea en “01 — Public Menu” el frame “UI-PUB-01 — Menú público / mobile 390 px”. Ancho de referencia: 390 px. Debe ser una pantalla high-fidelity mobile-first.


ORDEN OBLIGATORIO
1. Header compacto de marca.
2. Navegación sticky horizontal de categorías.
3. Destacados solo si existen.
4. Secciones del catálogo.
5. Bloque informativo compacto de salsas cuando corresponda.
6. CTA persistente inferior “Pedir por WhatsApp”.


HEADER
Logo/mascota visible y reconocible, pero compacto. Puede incluir “Sabor que te vuelve loco” como secundario. No crear hero gigante ni splash.


CATEGORÍAS
Chips horizontales scrollables. Usar nombres reales: Tacos, Nachos, Quesadillas, Pizzas, Más delicias, Bebidas, Tragos. Salsas se muestran como modificadores/información, no como categoría independiente de producto en el modelo MVP.


DESTACADOS
Sección condicional. Diseña máximo una o dos tarjetas más fuertes. Sin carrusel obligatorio.


USA PRODUCTOS REALES COMO MUESTRA
Taco x2 común — $10.000 — Queso, carne a elección, lechuga, tomate + 1 salsa a elección.
Taco especial x2 — $12.000 — Queso, carne a elección, lechuga, tomate, porotos, zanahoria y repollo.
Nachos Picossos — $10.000 — Nachos, queso cheddar y salsa picante.
Quesadillas especial x4 — $15.000 — Queso, cheddar, carne, verdeo y panceta.
Pepperoni Premium — $14.000 — Queso mozzarella, salsa, pepperoni premium, orégano y aceitunas.
Gordita mexicana — $12.000 — Pan de papa, carne mechada, lechuga, tomate, queso gratinado y 1 salsa a elección.


Formato de precio: “$ 10.000”.


SALSA INFO
“Salsas disponibles: Guacamole · Cheddar · Criolla · Picante · Roquefort”.


IMÁGENES
Usar fotografías del flyer solo cuando estén disponibles en el archivo y aporten valor. No poner imagen a todos los productos por obligación. Evitar texto del flyer dentro de las fotos si puede recortarse. No inventar ingredientes ni sustituir datos reales.


CTA WHATSAPP
Persistente en la parte inferior, icono + “Pedir por WhatsApp”, respeta safe-area y nunca tapa precio o contenido.


No agregues carrito, cantidades, botón “Agregar”, checkout, pedido interno, búsqueda pública ni navegación a detalle obligatoria.


Al terminar, informa estructura, componentes usados y cualquier decisión no definida que hayas tenido que tomar. No continúes automáticamente.


============================================================
PROMPT 04 — PUBLIC STATES / UI-PUB-02 + ERRORES
============================================================
Usa el MCP penpot.


En “01 — Public Menu”, crea “UI-PUB-02 — Menú público / estado producto agotado” reutilizando UI-PUB-01 y componentes existentes.


AGOTADO
- el producto sigue visible;
- badge textual “Agotado”;
- puede atenuarse la imagen;
- nombre y precio siguen legibles;
- no depender solo de rojo;
- no esconder tarjeta;
- no crear interacción de compra.


Además crea referencias compactas, no necesariamente pantallas completas separadas, para:
- loading inicial;
- error de red/servidor con acción Reintentar;
- menú vacío;
- producto sin imagen;
- ausencia total de destacados: la sección desaparece sin dejar hueco.


Verifica que el CTA WhatsApp no tape contenido en ninguno de los estados.


No modifiques UX. No continúes automáticamente.


============================================================
PROMPT 05 — 02 ADMIN / UI-ADM-01 LOGIN
============================================================
Usa el MCP penpot.


En “02 — Admin”, crea “UI-ADM-01 — Login admin / mobile”.


Dirección visual: operativa, limpia y neutra. No replicar la intensidad del menú público. Base clara/crema o gris muy claro, cards blancas, texto oscuro y acentos Taco Loco medidos.


Composición:
- logo pequeño;
- título “Administración Taco Loco”;
- email/usuario;
- contraseña;
- CTA “Ingresar”;
- estado loading del CTA;
- error inline asociado al campo o formulario;
- focus visible;
- targets táctiles >=44 px.


Sin marketing adicional, ilustraciones pesadas, registro público, recuperación compleja ni dashboard.


Al completar login, el destino conceptual es Productos, pero no construyas navegación funcional ni backend.


No continúes automáticamente.


============================================================
PROMPT 06 — 02 ADMIN / UI-ADM-02 PRODUCTOS
============================================================
Usa el MCP penpot.


En “02 — Admin”, crea “UI-ADM-02 — Productos admin / mobile”.


Objetivo: operación rápida desde teléfono.


ENCABEZADO
- AdminHeader compacto;
- título “Productos”;
- acción “Nuevo producto”.


FILTROS
- búsqueda simple administrativa;
- filtro por categoría.


CADA FILA/CARD
- nombre;
- categoría;
- precio;
- miniatura opcional;
- toggle Disponible/Agotado accesible directamente;
- acción Editar.


La disponibilidad DEBE poder cambiarse sin entrar a edición.


Incluye estados del toggle:
- normal;
- pending/saving;
- error con feedback claro.


Incluye EmptyState y error de carga como referencias de estado.


No agregues métricas, gráficos, ventas, stock ni dashboard. No continúes automáticamente.


============================================================
PROMPT 07 — 02 ADMIN / UI-ADM-03 EDITAR PRODUCTO
============================================================
Usa el MCP penpot.


En “02 — Admin”, crea “UI-ADM-03 — Editar producto / mobile”.


Formulario de una columna en móvil.


Agrupa visualmente:
A. Información — nombre, descripción, categoría.
B. Precio.
C. Imagen — uploader y estado de carga/error.
D. Estado — publicado, disponible, destacado.
E. Opciones/modificadores — representación simple compatible con el MVP.
F. Orden.


Acciones:
- Guardar como CTA primario;
- Cancelar/volver como secundaria;
- feedback de guardado exitoso;
- error de validación cerca del campo;
- error de red/servidor;
- estado Saving;
- sesión expirada como estado recuperable.


No agregues eliminación irreversible como acción principal. No agregues campos de stock, costos, recetas, impuestos, delivery, cocina ni POS.


No continúes automáticamente.


============================================================
PROMPT 08 — 04 STATES & QA
============================================================
Usa el MCP penpot.


Crea o completa “04 — States & QA”. El objetivo es reunir evidencia visual mínima para revisión de UI/QA, no duplicar todas las pantallas.


Documenta mediante componentes/mini-frames:
Público: loading, normal, agotado, menú vacío, error con reintento, producto sin imagen, sin destacados.
Admin: loading, saving, save success, validation error, network/server error, expired session, empty list, image upload/error, toggle pending/error.


Revisa y marca visualmente:
- contraste;
- legibilidad;
- touch targets >=44 px;
- focus visible;
- estados no solo por color;
- CTA WhatsApp sin superposición;
- labels de formularios claros;
- mensajes de error asociados a campos;
- no depender de hover.


No agregues nuevas funcionalidades. Si detectas una contradicción entre UI y UX, no la resuelvas por tu cuenta: repórtala.


No continúes automáticamente.


============================================================
PROMPT 09 — RESPONSIVE REPRESENTATIVO
============================================================
Usa el MCP penpot.


A partir de los diseños mobile aprobados, crea solamente vistas desktop/tablet representativas suficientes para demostrar responsive. No dupliques cada pantalla.


PÚBLICO
- contenido centrado con max-width;
- catálogo puede usar dos o tres columnas si la lectura se mantiene;
- categorías siguen accesibles;
- CTA WhatsApp puede pasar a botón persistente discreto;
- no cambiar IA ni comportamiento funcional.


ADMIN
- mantener misma estructura funcional;
- formulario puede usar dos columnas donde mejore lectura;
- listado puede ganar densidad sin convertirse en dashboard.


Prioridad: consistencia con mobile y no inventar comportamiento diferente por dispositivo.


No continúes automáticamente.


============================================================
PROMPT 10 — 05 HANDOFF / AUDITORÍA FINAL DE FASE 4
============================================================
Usa el MCP penpot.


Crea o completa “05 — Handoff” únicamente después de que las páginas anteriores hayan sido revisadas.


No rediseñes. Audita el archivo y prepara una vista de handoff que identifique:
- tokens aprobados;
- tipografías;
- componentes principales;
- pantallas públicas aprobadas;
- pantallas admin aprobadas;
- estados críticos;
- reglas responsive;
- reglas de accesibilidad;
- imágenes/activos usados;
- decisiones pendientes, si existieran.


Verifica criterio de cierre de Fase 4:
1. dirección visual y tokens definidos;
2. menú público mobile diseñado;
3. estados clave visibles;
4. login, listado y edición admin diseñados;
5. UI Kit mínimo existente;
6. contraste, legibilidad, responsive y consistencia revisados;
7. UX-001 implementable sin decisiones visuales estructurales pendientes.


Devuelve un reporte con PASS / PENDING para cada punto. No declares la fase cerrada si existe algún PENDING estructural.


No avances a arquitectura ni código.


ANEXO TÉCNICO — WORKAROUND DE TEXTO MCP / PENPOT — 08/08/2026


Problema confirmado: penpot.createText(str) vía plugin/MCP crea shapes con characters poblado pero sin modelo interno de glifos utilizable por el renderer. Síntomas verificados: textBounds nulos, flatten genera path sin contenido útil y export PNG no dibuja texto.


Workaround aprobado para Taco Loco UI:
- NO usar penpot.createText() para texto visible.
- Crear texto mediante penpot.createShapeFromSvg(svgString) con elemento <text>.
- Escapar XML en characters.
- Posicionar con coordenadas absolutas respecto del root.
- Eliminar el rectangle residual generado por el import SVG.
- Procesar lotes razonables, aproximadamente 44 textos por llamada.
- Validar render después de cada pantalla importante.
- Baseline SVG calibrado: y aproximado = h/2 + 0.35*fontSize.


Limitación conocida: el texto importado por SVG queda como svg-raw y pierde editabilidad tipográfica nativa. Esto se acepta como workaround operacional del MCP para materializar Fase 4, no como estándar general de la consultora.


Fuentes: el exportador headless del servidor no dispone de Bebas Neue, Inter ni Oswald y usa fallback. Por tanto, los PNG exportados sirven para verificar presencia/legibilidad/estructura, pero NO fidelidad tipográfica. La fidelidad de Bebas/Inter debe verificarse visualmente en el canvas real de Penpot cargado en el navegador del usuario.


Estado de 00 — Foundations: estructura completa de 8 secciones y texto renderizable mediante SVG. Puede usarse como base para continuar componentes y pantallas, manteniendo la limitación anterior.


REGLA PARA TODOS LOS PROMPTS SIGUIENTES
Agregar al inicio de cada ejecución: conservar este workaround de texto→SVG, no volver a createText(), no asumir que el PNG valida la fuente exacta y no modificar decisiones canónicas de UX/UI por limitaciones del MCP.


FIN DEL DOCUMENTO
