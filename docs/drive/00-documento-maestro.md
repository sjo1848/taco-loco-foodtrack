---
drive_title: Taco Loco Foodtrack — Documento maestro
drive_url: https://docs.google.com/document/d/1xeFpomSyQYvUXehaCObq1AD3RCOS0E4pY_FuU-nu5xw
source: Google Drive mirror
---

﻿TACO LOCO FOODTRACK — DOCUMENTO MAESTRO


Estado: Fase 4 UI en progreso + Fases 5 y 6 cerradas — gate pendiente solo de UI visual
Última actualización: 08/08/2026


1. OBJETIVO DEL PROYECTO


Construir un menú digital para Taco Loco que se abra al escanear un código QR. La primera versión debe ser rápida, simple y optimizada para celular, sin registro ni instalación. La solución debe nacer preparada para evolucionar hacia pedidos por mesa, cocina, caja, stock y analítica sin rehacer la base del producto.


Concepto de flujo inicial:
Cliente → escanea QR → abre menú → navega categorías → consulta producto → ve descripción, precio, opciones y disponibilidad.


2. PRINCIPIOS ACORDADOS


• No reproducir la carta gráfica como una imagen estática.
• Mantener la identidad visual de Taco Loco: fondo oscuro, estética mexicana, rojo/verde/amarillo, tipografía con carácter y fotografías de producto.
• Simplificar la experiencia móvil: categorías claras, lectura rápida, precios visibles y navegación sin zoom.
• El negocio debe poder modificar precios y disponibilidad sin depender del desarrollador.
• Diseñar el MVP con posibilidad de crecimiento, evitando sobredimensionar la arquitectura.
• La disponibilidad de productos (Disponible / Agotado) forma parte del MVP.


3. ALCANCE PROPUESTO DEL MVP — MENÚ DIGITAL


Incluye:
• QR para abrir el menú.
• Diseño responsive/mobile-first.
• Categorías.
• Productos.
• Descripciones.
• Precios.
• Fotografías cuando aporten valor.
• Disponible / agotado.
• Promociones.
• Ingredientes y opciones.
• Panel de administración mínimo para editar menú, precios y disponibilidad.


Fuera del MVP inicial, pero previsto para evolución:
• Carrito.
• Pedidos desde mesa.
• Cocina / KDS.
• Caja.
• Pagos online.
• Delivery / take away.
• Stock.
• Analítica operacional.


4. ESTRUCTURA FUNCIONAL DEL MENÚ


Restaurant
└── Menu
    ├── Category
    │   ├── Product
    │   │   ├── Price
    │   │   ├── Description
    │   │   ├── Image
    │   │   ├── Availability
    │   │   └── Options
    │   └── Product
    └── Category


Las salsas y otros adicionales no deben modelarse necesariamente como productos independientes. También pueden actuar como opciones o complementos asociados a otros productos.


5. CATEGORÍAS IDENTIFICADAS


• Tacos
• Nachos
• Quesadillas
• Pizzas
• Más delicias
• Salsas
• Bebidas
• Tragos
• Promociones / destacados (propuesta UX)


6. CATÁLOGO EXTRAÍDO DE LAS CARTAS


6.1 Tacos


Taco x2 común — $10.000
Descripción visible: queso, carne a elección, lechuga, tomate + 1 salsa a elección.


Taco especial x2 — $12.000
Descripción visible: queso, carne a elección, lechuga, tomate, porotos, zanahoria y repollo.


Burrito — $10.000
Descripción visible: queso, carne, poroto, lechuga, tomate, zanahoria y choclo.


Chimichanga — $10.000
Descripción visible: queso, carne mechada y verdeo.


6.2 Nachos


Nachos cheddar — $10.000
Descripción visible: nachos con cheddar.


Nachos especial — $13.000
Descripción visible: nachos, queso, carne y criolla.


Nachos Picossos — $10.000
Descripción visible: nachos, queso cheddar y salsa picante.
Nombre comercial confirmado: Nachos Picossos.


6.3 Quesadillas


Quesadillas x4 — $13.000
Descripción visible: queso, carne y verdeo.


Quesadillas especial x4 — $15.000
Ingredientes confirmados: queso, cheddar, carne, verdeo y panceta.


6.4 Pizzas


Muzza — $11.000
Queso mozzarella, aceitunas y orégano.


Cantimpalo — $14.000
Queso mozzarella, salsa de tomate y cantimpalo.


Picosa — $13.000
Queso mozzarella, picante, nachos y aceitunas.


Salchipizza — $15.000
Queso mozzarella, salchichas asadas, cheddar y aceitunas.


Pepperoni Premium — $14.000
Queso mozzarella, salsa, pepperoni premium, orégano y aceitunas.


Uspallatina — $15.000
Queso mozzarella, cheddar, panceta y 1 salsa a elección.


Taco Loco — $17.000
Queso mozzarella, carne mechada, choclo, nachos y aceitunas.


Anchopizza — $13.000
Queso mozzarella, anchoas, morrón, aceitunas y orégano.


6.5 Más delicias


Elote ¡Choclo! — $4.000
Descripción visible: choclo bañado en mayonesa, queso y picante especial.


Gordita mexicana — $12.000
Descripción visible: pan de papa, carne mechada, lechuga, tomate, queso gratinado y 1 salsa a elección.


6.6 Salsas


• Guacamole
• Cheddar
• Criolla
• Picante
• Roquefort


6.7 Bebidas


Gaseosa 1,5 L — $5.000
Gaseosa 500 ml — $3.000
Agua saborizada 1,5 L — $3.500
Energizante — $4.000
Latón cerveza 710 ml — $4.000
Corona 710 ml — $7.000


6.8 Tragos


Precio confirmado para todos los tragos: $7.000.


• Mojito
• Mojito Coconut
• Daikiri: mango, durazno o frutilla
• Taco Loco: gatorade, coconut, Sprite y vodka
• Fernet
• Gancia


7. UX PROPUESTA


Pantalla inicial:
• Marca Taco Loco.
• Frase de marca.
• Categorías de acceso rápido.
• Productos destacados / recomendados.


Categorías sugeridas en navegación:
Tacos | Quesadillas | Pizzas | Nachos | Más delicias | Salsas | Bebidas | Tragos


La navegación debería incluir una barra de categorías persistente o de acceso rápido mientras el cliente recorre el menú.


Ficha/listado de producto:
• Fotografía opcional.
• Nombre.
• Descripción breve.
• Precio destacado.
• Estado de disponibilidad.
• Opciones cuando correspondan.


8. QR Y PREPARACIÓN PARA PEDIDOS POR MESA


Aunque la primera versión sea solo menú, conviene preparar URLs capaces de identificar mesa:


/menu?table=1
/menu?table=2
/menu?table=3


En el MVP el parámetro puede no modificar el comportamiento. Más adelante permitirá vincular directamente el pedido con una mesa sin reemplazar los QR impresos.


Evolución prevista:
QR de mesa → Menú → Carrito → Confirmar pedido → Pedido asociado a mesa → Cocina / Caja / Mozo.


9. ADMINISTRACIÓN


Panel mínimo previsto:
• Listado de productos.
• Alta / edición de productos.
• Cambio de precio.
• Disponible / agotado.
• Categorías.
• Promociones.
• Configuración básica.


Requisito de negocio: el encargado debe poder realizar cambios operativos desde un teléfono sin tocar código.


10. ARQUITECTURA CONCEPTUAL INICIAL


Taco Loco Foodtrack
├── Público
│   └── /menu
└── Operación
    └── /admin


Frontend → API → módulos de menú/categorías/productos → base de datos.


En esta etapa se propone un monolito modular. No hay justificación para microservicios.


11. EVOLUCIÓN DEL PRODUCTO


Fase 1 — Menú digital
QR → menú → productos/precios/disponibilidad.


Fase 2 — Pedido por mesa
QR identificado → menú → carrito → pedido.


Fase 3 — Operación
Pedido → cocina / caja / mozo / cliente.


Fase 4 — Analítica
Ventas, productos más vendidos, horarios pico, ticket promedio, tiempos de preparación y stock.


Fase 5 — Taco Loco Foodtrack integral
Salón, take away, delivery, cocina, caja, stock y analítica.


12. DOCUMENTOS / HITOS A DESARROLLAR


MEN-001 — Catálogo y estructura del menú digital.
UX-001 — Flujo cliente QR → menú → producto.
Luego: modelo de datos, administración, estados, QA y arquitectura técnica detallada.


13. PENDIENTES DE VALIDACIÓN


• Nombre confirmado: Nachos Picossos.
• Quesadillas especial x4 confirmada: queso, cheddar, carne, verdeo y panceta.
• Confirmado: $7.000 aplica a todos los tragos.
• MEN-001 cerrado y declarado fuente canónica del catálogo para el MVP.
• Definir dominio/URL definitiva del menú.
• La cantidad de mesas no condiciona el MVP del menú digital. Solo será relevante si en una fase futura se implementan pedidos identificados por mesa.


14. REFERENCIAS VISUALES


Las dos cartas compartidas en la conversación son la referencia visual inicial para identidad de marca, categorías, productos y precios. Deben conservarse como fuente de consulta, pero no utilizarse como interfaz final del menú digital.


Este documento es vivo: se actualizará a medida que avance el proyecto.


Referencia
15. DECISIÓN — DESCUBRIMIENTO OPERACIONAL MÍNIMO


Taco Loco opera como un foodtruck tradicional y actualmente recibe pedidos por WhatsApp. Para el MVP de menú digital no se considera necesario realizar una etapa extensa de entrevistas o descubrimiento operacional.


Criterios acordados:
• La frecuencia de cambio de precios no condiciona el diseño: el panel permitirá modificar precios cuando el negocio lo necesite.
• La cantidad de mesas no condiciona el MVP actual. Solo será relevante si en el futuro se implementan pedidos asociados a una mesa concreta.
• El flujo tradicional actual y el uso de WhatsApp son suficientes como contexto operativo para avanzar con el menú digital.
• No se bloqueará el proyecto esperando relevamiento adicional.
• Se solicitarán datos al negocio únicamente cuando aparezca una decisión concreta que no pueda resolverse razonablemente con la información disponible.


Conclusión: avanzar directamente con definición funcional, UX, catálogo, administración y posterior implementación del MVP, manteniendo el descubrimiento como una validación puntual y no como una fase formal extensa.
 visual A — Carta de bebidas y parte del menú


Referencia visual B — Carta principal de comidas


16. PROCESO PROFESIONAL PREVIO A CONSTRUCCIÓN — PRE-DEV-002


PRE-DEV-002 — Proceso profesional, roles y gate de construcción — Taco Loco Foodtrack es la referencia principal para el trabajo previo a implementación. PRE-DEV-001 queda como antecedente.


Proceso acordado de CuyoConsulting and Development: Contexto y encuadre → Alcance funcional → Modelo funcional/dominio → UX → UI → Diseño técnico → QA y criterios de aceptación → Backlog → Construcción. El análisis mantiene profundidad proporcional al riesgo y se detiene al superar el gate de construcción.


Documento rector: https://docs.google.com/document/d/1m2nx10SLOYDlbUW3zCLEmC0yQ4rqtJ_hP3fq3nNtaE0/edit






17. ALC-001 — CIERRE DE ALCANCE FUNCIONAL DEL MVP
Estado: CERRADO — 07/08/2026.
Documento canónico: ALC-001 — Alcance funcional MVP — Taco Loco Foodtrack.


Decisiones principales:
• menú público accesible por QR, sin login ni instalación;
• experiencia mobile-first;
• panel administrador autenticado;
• gestión de categorías, productos, precios, imágenes, disponibilidad, publicación, destacados y orden;
• soporte de opciones/modificadores simples para representar correctamente el catálogo;
• WhatsApp incluido como CTA hacia el canal actual, sin carrito ni registro interno de pedidos;
• producto agotado visible con estado inequívoco;
• cantidad de mesas fuera de requisitos del MVP;
• KDS, POS, pagos, stock, delivery, pedidos internos y analítica avanzada fuera de alcance.


El cierre de ALC-001 habilita FASE 2 — Catálogo, contenido y modelo funcional / MEN-001.
Documento: https://docs.google.com/document/d/1mNHLmkbA7fRviuLx56HokFThTyDfuFbXtFqXBubHRyk/edit




17. CIERRE DE MEN-001 E INICIO DE UX-001


MEN-001 — Catálogo y modelo funcional del menú: CERRADO.


Validaciones finales del catálogo:
• Nachos Picossos.
• Quesadillas especial x4: queso, cheddar, carne, verdeo y panceta.
• Todos los tragos: $7.000.
• “Carne a elección” se conserva como texto genérico para el MVP, sin enumerar opciones.
• Nombre comercial: Elote ¡Choclo!.
• Normalización: Pepperoni Premium.
• Marcas/sabores específicos de bebidas no forman parte del modelado requerido del MVP.
• Imágenes: priorizar material visual de los flyers; generar alternativas cuando UI requiera una imagen y no exista material adecuado.


Estado metodológico CuyoConsulting and Development:
✓ Fase 0 — Contexto y encuadre.
✓ Fase 1 — Alcance funcional.
✓ Fase 2 — Modelo funcional/catálogo.
→ Fase 3 — UX EN PROGRESO.
○ Fase 4 — UI pendiente.
○ Fase 5 — Diseño técnico pendiente.
○ Fase 6 — QA/backlog pendiente.


Documento UX activo: UX-001 — Flujos críticos y arquitectura de experiencia.




17. AVANCE UI — 08/08/2026
Fase 4 UI iniciada formalmente.
Documento: UI-001 — Dirección visual y especificación de interfaz — Taco Loco Foodtrack.
Herramienta UI canónica: Penpot. El archivo Figma previo queda como antecedente histórico.
Dirección aprobada como baseline de trabajo: menú público oscuro inspirado en la identidad real del flyer, acentos verde/rojo/amarillo, legibilidad mobile-first, tarjetas horizontales compactas, categorías sticky, CTA WhatsApp persistente y admin más neutro/operativo.
Se prepararon activos recortados del flyer para prototipo. La construcción visual continuará en Penpot; UI todavía no se considera cerrada hasta completar y revisar los mockups principales y el UI Kit mínimo.


18. DECISIÓN DE HERRAMIENTA UI — PENPOT
Decisión 08/08/2026: Taco Loco Foodtrack adopta Penpot como herramienta canónica para la Fase 4 UI. Los documentos UX-001 y UI-001 mantienen sus decisiones vigentes; cambia únicamente la herramienta de materialización visual. El archivo Figma existente queda como antecedente y no como fuente canónica. La Fase 4 se cerrará cuando las pantallas principales y el UI Kit mínimo estén diseñados y revisados en Penpot.


19. AVANCE UI SIN DEPENDENCIA DEL MCP — 08/08/2026
El MCP de Penpot presentó comportamiento inestable, por lo que se decidió no bloquear el avance del proyecto esperando su funcionamiento.


Se creó PENPOT-001 — Prompts de ejecución UI — Taco Loco Foodtrack, con prompts independientes y ordenados para ejecutar más adelante en OpenCode/Penpot:
https://docs.google.com/document/d/1dZSbstwsGfWqstrie8Zf9ppL8jJF2o9Fk8JsTsLueao/edit


Se creó UI-002 — Blueprint visual ejecutable de pantallas — Taco Loco Foodtrack:
https://docs.google.com/document/d/1G1DVRt6Dnwz67uLw7EID3a4CQZH99q1hGXpl8h9f3Vc/edit


UI-002 concreta medidas y composición de menú público, ProductCard, navegación de categorías, CTA WhatsApp, login admin, listado de productos, edición, estados y responsive. Con UI-001 + UI-002 no quedan decisiones visuales estructurales que justifiquen seguir agregando documentación antes de renderizar.


Estado actual:
✓ Fase 0 — Contexto.
✓ Fase 1 — Alcance.
✓ Fase 2 — Catálogo/modelo funcional.
✓ Fase 3 — UX.
→ Fase 4 — UI: dirección y blueprint ejecutable definidos; mockups editables + revisión visual pendientes.
○ Fase 5 — Diseño técnico pendiente.
○ Fase 6 — QA/backlog pendiente.


Gate de construcción: CERRADO.


20. INICIO FASE 5 — DISEÑO TÉCNICO — 08/08/2026
Se creó TEC-001 — Diseño técnico del MVP — Taco Loco Foodtrack:
https://docs.google.com/document/d/1dn-p3M-VzSEtLCRe2jDfXeE6hxpKliWy_W41AIpMw7k/edit


Decisión arquitectónica V1 propuesta: monolito modular full-stack con Next.js + TypeScript, PostgreSQL + Prisma, autenticación admin con sesión server-side, almacenamiento de imágenes S3-compatible/Cloudflare R2 y despliegue Docker Compose sobre VPS con Caddy.


Se descartó para el MVP separar un backend NestJS porque agrega complejidad operativa sin una necesidad actual demostrada. La arquitectura se mantiene modular para permitir extracción futura si el producto realmente evoluciona hacia múltiples clientes, integraciones o una operación de pedidos más compleja.


TEC-001 también define modelo físico V1, contratos principales, seguridad, media, CI/CD, backups, observabilidad y estrategia de pruebas como input para Fase 6.


Estado actual:
✓ Fase 0 — Contexto.
✓ Fase 1 — Alcance.
✓ Fase 2 — Catálogo/modelo funcional.
✓ Fase 3 — UX.
→ Fase 4 — UI: mockups/revisión visual pendientes; documentación suficiente para ejecutar.
→ Fase 5 — Diseño técnico EN PROGRESO en TEC-001.
○ Fase 6 — QA/backlog pendiente.


Gate de construcción: CERRADO.


21. CIERRE FASE 5 — 08/08/2026
TEC-001 fue revisado críticamente y se declara CERRADO para el MVP.


Decisiones técnicas cerradas: monolito modular Next.js + TypeScript, PostgreSQL + Prisma, autenticación con sesión server-side, R2/S3-compatible para media, Docker Compose + Caddy sobre VPS, GitHub Actions para CI/CD y backups offsite de PostgreSQL.


Ajustes de simplificación incorporados: no priceDelta inicial, no slug de producto obligatorio, no API pública interna obligatoria para renderizar el menú, sin Redis/colas/microservicios/staging dedicado.


Estado:
✓ Fases 0–3 cerradas.
→ Fase 4 UI pendiente de materialización/revisión visual.
✓ Fase 5 Diseño Técnico cerrada.
→ Fase 6 QA/backlog INICIADA.


Gate de construcción permanece CERRADO únicamente hasta completar Fase 4 visual.


22. CIERRE FASE 6 — QA, BACKLOG Y READINESS — 08/08/2026
Se crearon y cerraron los documentos de readiness pre-construcción:
QA-001 — Criterios de aceptación, matriz de pruebas y Definition of Done:
https://docs.google.com/document/d/1Zo4i4GtzWaIGyJ211AUJnmwU9M4-ko-nTkAvh1eZfT4/edit


BLG-001 — Backlog de construcción MVP:
https://docs.google.com/document/d/1zfHfUhs65PXVLXdYnDlMEW3YKK-Imd42ylLlW24Sa3s/edit


QA-001 fija criterios verificables para funcionalidad, errores, auth, imágenes, responsive, accesibilidad, seguridad, performance, backups, restore y release, además de Definition of Done por ticket y por MVP.


BLG-001 convierte el MVP en tickets P0 ordenados desde fundación técnica hasta release, con dependencias y referencias QA. La revisión cruzada confirmó que no hay expansión silenciosa del alcance.


Estado pre-construcción:
✓ Fase 0 — Contexto CERRADA.
✓ Fase 1 — Alcance CERRADA.
✓ Fase 2 — Modelo funcional/catálogo CERRADA.
✓ Fase 3 — UX CERRADA.
→ Fase 4 — UI EN PROGRESO: dirección, blueprint y prompts definidos; faltan mockups editables y revisión visual.
✓ Fase 5 — Diseño técnico CERRADO.
✓ Fase 6 — QA/backlog/readiness CERRADA.


Único elemento pendiente del gate: UI principal materializada y aprobada visualmente. No se inicia construcción todavía.
