---
drive_title: PRE-DEV-002 — Proceso profesional, roles y gate de construcción — Taco Loco Foodtrack
drive_url: https://docs.google.com/document/d/1m2nx10SLOYDlbUW3zCLEmC0yQ4rqtJ_hP3fq3nNtaE0
source: Google Drive mirror
---

﻿PRE-DEV-002 — PROCESO PROFESIONAL, ROLES Y GATE DE CONSTRUCCIÓN
Taco Loco Foodtrack
Fecha: 07/08/2026
Estado: Documento rector pre-construcción


1. PROPÓSITO


Definir el proceso profesional que seguirá la consultora antes de comenzar a programar, asegurando cobertura de negocio, producto, UX, UI, arquitectura, desarrollo, QA, seguridad y despliegue sin sobredimensionar un proyecto de alcance acotado.


Principio: que un proyecto sea pequeño no elimina responsabilidades profesionales. Lo que se reduce es la cantidad de personas y la profundidad documental. Una misma persona puede asumir varios roles, pero las responsabilidades de cada rol deben estar cubiertas explícitamente.


2. MODELO DE ROLES


2.1 Gestión / relación con cliente — Project Manager / Account Lead
Responsabilidad: ordenar alcance, decisiones, prioridades, dependencias y comunicación con Taco Loco.
Entregables: alcance acordado, decisiones registradas, hitos, riesgos y gate de construcción.


2.2 Negocio y producto — Product Owner / Business Analyst
Responsabilidad: traducir la necesidad del foodtruck a requisitos claros y priorizados.
Entregables: objetivo, alcance MVP, fuera de alcance, reglas funcionales, catálogo y criterios de negocio.


2.3 Arquitectura de información y contenido — Content / Information Architecture
Responsabilidad: transformar la carta actual en una estructura digital coherente.
Entregables: categorías, productos, descripciones, precios, opciones, modificadores, orden de visualización y estados de disponibilidad.


2.4 UX Designer
Responsabilidad: definir cómo se usa el producto, los flujos, jerarquías, navegación y estados.
Entregables: user flows, wireframes, comportamiento responsive, estados vacíos/error/agotado y criterios básicos de accesibilidad.


2.5 UI / Visual Designer
Responsabilidad: definir cómo se ve el producto y cómo se adapta la identidad de Taco Loco a una interfaz digital.
Entregables: mockups de alta fidelidad, paleta, tipografía, espaciado, iconografía, tratamiento de imágenes, componentes visuales y estados de interacción.


Para este MVP no se construirá un Design System corporativo completo. Se hará un UI Kit mínimo y consistente con los componentes necesarios para menú público y administración.


2.6 Tech Lead / Solution Architect
Responsabilidad: decidir la estructura técnica mínima correcta para implementar y evolucionar el MVP.
Entregables: stack, arquitectura, modelo de datos, autenticación, almacenamiento de imágenes, contratos principales, estrategia de despliegue y decisiones técnicas registradas.


2.7 Frontend Engineer
Responsabilidad: implementar el menú público y el panel administrativo respetando UX/UI, responsive, accesibilidad y performance.


2.8 Backend Engineer
Responsabilidad: implementar persistencia, API, autenticación, reglas de negocio y operaciones administrativas.


2.9 QA Engineer
Responsabilidad: definir y verificar criterios de aceptación, pruebas funcionales, responsive, accesibilidad, errores, regresión y smoke tests.


QA interviene antes de programar para revisar requisitos y criterios de aceptación, durante construcción y antes del release.


2.10 DevOps / Cloud Engineer
Responsabilidad: entornos, CI/CD mínimo, secretos, despliegue, dominio, HTTPS, backups básicos y observabilidad suficiente para producción.


2.11 Security / AppSec — revisión transversal
No requiere un rol dedicado para este tamaño de proyecto, pero sí cubrir: autenticación admin, gestión de sesiones, secretos, validación de entradas, permisos, dependencias, HTTPS y configuración segura.


3. REGLA DE DIMENSIONAMIENTO


Estos son roles profesionales, no necesariamente once personas. Para Taco Loco varias funciones pueden concentrarse en el mismo equipo o incluso en una misma persona. Lo importante es que ninguna responsabilidad quede omitida.


Ejemplo de agrupación razonable para este proyecto:
• PM + Product/BA.
• UX + UI.
• Tech Lead + Backend.
• Frontend.
• QA.
• DevOps/Security como responsabilidad transversal.


4. ETAPAS PREVIAS A CONSTRUCCIÓN


FASE 0 — Contexto y encuadre
Roles principales: PM + Product/BA.
Objetivo: confirmar problema, contexto operativo, objetivo del producto y límites del proyecto.
Estado actual: prácticamente cerrado.
Salida: contexto y alcance preliminar.


FASE 1 — Alcance funcional del MVP
Roles principales: Product/BA + PM + QA.
Definir exactamente:
• menú público;
• administración;
• edición de productos, precios, imágenes y disponibilidad;
• promociones/destacados si aplican;
• vínculo o no con WhatsApp;
• qué queda expresamente fuera del MVP.
Salida: alcance funcional cerrado + criterios de aceptación de alto nivel.


FASE 2 — Catálogo, contenido y modelo funcional
Roles principales: Product/BA + Information Architecture + Tech Lead.
Definir:
• categorías;
• productos;
• descripciones;
• precios;
• imágenes;
• opciones/modificadores;
• disponibilidad;
• orden;
• datos dudosos de las cartas.
Salida: MEN-001 y modelo funcional validado.


FASE 3 — UX
Roles principales: UX + Product/BA + QA.
Definir:
• QR → menú;
• navegación por categorías;
• lectura de productos;
• producto agotado;
• contacto/pedido por WhatsApp si entra en alcance;
• login admin;
• catálogo admin;
• edición de producto;
• errores y estados vacíos.
Salida: user flows + wireframes + comportamiento responsive.


FASE 4 — UI
Roles principales: UI Designer + UX + Frontend.
Definir:
• adaptación visual de la marca Taco Loco;
• diseño mobile-first;
• mockups high-fidelity del menú público;
• mockups del panel admin;
• componentes necesarios;
• estados hover/focus/disabled/agotado/error;
• UI Kit mínimo;
• reglas básicas de imágenes, tipografía, contraste y espaciado.
Salida: UI aprobada y lista para implementación, documentada visualmente en Penpot.


FASE 5 — Diseño técnico
Roles principales: Tech Lead + Frontend + Backend + DevOps + Security.
Definir:
• stack;
• estructura del repositorio;
• frontend/backend;
• modelo de datos;
• API/contratos necesarios;
• autenticación admin;
• almacenamiento de imágenes;
• QR y URL pública;
• configuración y secretos;
• despliegue;
• seguridad mínima.
Salida: arquitectura técnica breve y decisiones suficientes para construir.


FASE 6 — QA, backlog y readiness
Roles principales: QA + PM + Product/BA + Tech Lead.
Definir:
• criterios de aceptación detallados;
• casos críticos;
• responsive;
• accesibilidad mínima;
• performance móvil;
• seguridad básica;
• smoke tests;
• tickets de implementación ordenados.
Salida: backlog ejecutable + checklist QA + Definition of Done.


5. GATE DE CONSTRUCCIÓN


No se empieza a codear hasta que podamos responder sí a lo siguiente:


• ¿El alcance MVP está cerrado?
• ¿El catálogo y sus reglas pueden representarse sin ambigüedad?
• ¿Los flujos UX están definidos?
• ¿La UI principal está diseñada y aprobada?
• ¿El stack y el modelo de datos están decididos?
• ¿La autenticación y el despliegue tienen una estrategia definida?
• ¿QA tiene criterios de aceptación verificables?
• ¿Existe un backlog ordenado para comenzar implementación?


Cuando esos puntos estén cubiertos, termina el análisis previo. No se seguirá agregando documentación que no desbloquee una decisión real de construcción.


6. ETAPAS DE CONSTRUCCIÓN Y RELEASE


Una vez superado el gate:


Construcción 1 — Fundación técnica
Repositorio, entornos, base de datos, estructura del proyecto, CI mínimo.


Construcción 2 — Backend MVP
Catálogo, categorías, productos, opciones, imágenes, disponibilidad y autenticación admin.


Construcción 3 — Frontend público
Menú QR según UX/UI aprobadas.


Construcción 4 — Panel admin
Gestión operativa del catálogo.


Construcción 5 — QA integrado
Pruebas durante cada incremento, no solo al final.


Construcción 6 — Release
Despliegue, dominio/QR, smoke tests, validación real en celular y entrega.


7. ESTADO ACTUAL REAL


Completado / muy avanzado:
• contexto del foodtruck;
• objetivo general;
• dirección del MVP;
• referencias visuales;
• catálogo inicial extraído;
• arquitectura conceptual muy preliminar;
• decisión de mantener el discovery corto.


Pendiente antes de construcción:
• alcance funcional exacto — CERRADO en ALC-001;
• catálogo y opciones — CERRADO en MEN-001;
• UX formal mínima — CERRADA en UX-001;
• UI formal mínima;
• diseño técnico;
• QA y criterios de aceptación;
• backlog de construcción.


8. LÍMITE DEL ANÁLISIS


No se desarrollará antes del MVP: KDS, POS, stock detallado, recetas/costos, pagos online, delivery completo, analítica avanzada, CQRS, event sourcing, microservicios ni un Design System completo.


Se documentará solo lo necesario para construir correctamente el menú digital y su administración.


9. DECISIÓN DE GESTIÓN


Desde este documento, UX y UI se consideran disciplinas distintas dentro del proceso. PRE-DEV-001 queda como antecedente, pero PRE-DEV-002 pasa a ser la referencia principal para las etapas y roles previos a construcción.




CUYOCONSULTING AND DEVELOPMENT — FORMA DE TRABAJO


CuyoConsulting and Development aborda cada proyecto como una consultora profesional de software. El tamaño del proyecto determina la profundidad de cada fase, pero no elimina disciplinas críticas.


Principios operativos:
• Pensamiento sistémico: entender el producto como un sistema de negocio, usuarios, datos, operación, tecnología y calidad.
• Descubrimiento proporcional: relevar solo lo necesario para reducir riesgo real y evitar análisis excesivo.
• Alcance explícito: definir MVP, fuera de alcance, supuestos y criterios de cierre antes de construir.
• Roles profesionales completos: Product/Business, Project Management, UX, UI, Arquitectura/Tech Lead, Frontend, Backend, QA, DevOps y Seguridad, aunque una misma persona pueda cubrir varios roles.
• UX y UI son disciplinas separadas: primero flujo, comportamiento y jerarquía; luego identidad visual, componentes, estados y mockups.
• Arquitectura proporcional: elegir la solución más simple que resuelva bien el problema y permita evolución razonable; evitar sobrearquitectura.
• QA desde el inicio: criterios de aceptación, pruebas, estados de error, responsive, accesibilidad, performance y smoke tests forman parte del diseño, no se agregan al final.
• Seguridad transversal: autenticación, secretos, validación de entradas, dependencias y superficie de ataque se consideran desde el diseño técnico.
• Documentación viva y canónica: decisiones, contexto, alcance, UX/UI, arquitectura, QA y backlog se mantienen actualizados en Drive.
• Gate de construcción: no se programa hasta que estén cerrados alcance, modelo funcional, UX, UI principal, arquitectura mínima, QA y backlog.
• Límite al análisis: una vez cumplido el gate, se deja de analizar lo no crítico y se pasa a construcción.
• Construcción incremental: tickets pequeños, entregables verificables, integración continua y validación frecuente.
• Evolución por fases: nuevas capacidades se diseñan cuando aportan valor real; no se anticipan sistemas complejos sin necesidad.


Secuencia estándar de CuyoConsulting and Development:
Contexto y encuadre → Alcance funcional → Modelo funcional/dominio → UX → UI → Diseño técnico → QA y criterios de aceptación → Backlog → Construcción → Integración/CI-CD → Validación → Despliegue → Observación y evolución.


Esta metodología es el marco rector del proyecto Taco Loco Foodtrack y debe reutilizarse como criterio de trabajo en futuros proyectos de CuyoConsulting and Development, adaptando profundidad y entregables al tamaño y riesgo de cada iniciativa.




10. ACTUALIZACIÓN DE AVANCE — 07/08/2026
FASE 1 — Alcance funcional del MVP: CERRADA.
Documento canónico de alcance: ALC-001 — Alcance funcional MVP — Taco Loco Foodtrack.


Decisiones principales cerradas:
• menú público QR sin login;
• administración autenticada;
• gestión de categorías, productos, precios, imágenes, disponibilidad, destacados y orden;
• soporte de opciones/modificadores simples;
• WhatsApp incluido como CTA hacia el canal tradicional, sin carrito ni registro interno del pedido;
• no se requiere número de mesa para el MVP;
• sistema de pedidos, KDS, POS, pagos, stock, delivery y analítica avanzada permanecen fuera de alcance.


Estado del proceso: FASE 2 CERRADA en MEN-001. FASE 3 — UX INICIADA en UX-


11. ACTUALIZACIÓN DE AVANCE — CIERRE FASE 2 / INICIO FASE 3


FASE 2 — Catálogo, contenido y modelo funcional: CERRADA.
Documento canónico: MEN-001 — Catálogo y modelo funcional del menú.


Validaciones finales incorporadas:
• Nachos Picossos;
• Quesadillas especial x4: queso, cheddar, carne, verdeo y panceta;
• todos los tragos a $7.000;
• “carne a elección” permanece como indicación genérica en el MVP;
• Elote ¡Choclo! conservado como nombre comercial;
• Pepperoni Premium normalizado;
• marcas/sabores de bebidas no requeridos para MVP;
• imágenes: reutilizar flyers y generar alternativas cuando UI lo necesite.


FASE 3 — UX: INICIADA.
Documento: UX-001 — Flujos críticos y arquitectura de experiencia.


Gate actual:
✓ Alcance funcional.
✓ Modelo funcional/catálogo.
→ UX en progreso.
○ UI pendiente.
○ Diseño técnico pendiente.
○ QA/backlog pendiente.
001.


11. ACTUALIZACIÓN DE AVANCE — 08/08/2026


FASE 2 — Catálogo, contenido y modelo funcional: CERRADA en MEN-001.
FASE 3 — UX: CERRADA en UX-001.


Decisiones UX cerradas: menú público en una sola página, navegación rápida por categorías, producto entendible desde listado, destacados condicionales, CTA persistente a WhatsApp, agotados visibles, admin sin dashboard, disponibilidad editable desde listado y edición completa en formulario separado.


Se creó además un diagrama FigJam de flujos críticos para cliente y administración.


Estado del proceso: avanzar a FASE 4 — UI / Visual Design.




11. ACTUALIZACIÓN DE AVANCE — 08/08/2026
FASE 4 — UI: EN PROGRESO.
Documento canónico: UI-001 — Dirección visual y especificación de interfaz — Taco Loco Foodtrack.
Se definió la primera baseline visual: dirección de marca, paleta, tipografía, espaciado, patrón de menú público, CTA WhatsApp, tratamiento de agotados, uso de imágenes y dirección visual del admin.
Se prepararon recortes del flyer como activos de prototipo.
Herramienta UI canónica adoptada: Penpot. El archivo Figma previo queda como antecedente histórico.
La Fase 4 continuará en Penpot. No se considera cerrada hasta diseñar y revisar las pantallas principales y el UI Kit mínimo.


12. DECISIÓN DE HERRAMIENTA UI — 08/08/2026
Para Taco Loco Foodtrack, Penpot pasa a ser la herramienta canónica de diseño visual. Figma deja de ser la herramienta activa del proyecto. Este cambio no altera la metodología de CuyoConsulting and Development: se mantienen separados UX, UI, diseño técnico y construcción, y el gate de construcción sigue exigiendo UI principal aprobada antes de programar.


13. AVANCE UI SIN BLOQUEO POR MCP — 08/08/2026
El MCP de Penpot no se considera suficientemente estable para usarlo como dependencia del avance diario. Penpot continúa como herramienta visual canónica, pero se desacopla el progreso metodológico de la automatización.


Se creó PENPOT-001 — Prompts de ejecución UI — Taco Loco Foodtrack, que conserva la secuencia completa de ejecución futura en OpenCode/Penpot:
https://docs.google.com/document/d/1dZSbstwsGfWqstrie8Zf9ppL8jJF2o9Fk8JsTsLueao/edit


Se creó UI-002 — Blueprint visual ejecutable de pantallas — Taco Loco Foodtrack, que fija layout, medidas base, componentes, estados y reglas responsive suficientes para materializar los mockups sin nueva fase de análisis:
https://docs.google.com/document/d/1G1DVRt6Dnwz67uLw7EID3a4CQZH99q1hGXpl8h9f3Vc/edit


Estado metodológico:
✓ Fase 0 — Contexto.
✓ Fase 1 — Alcance.
✓ Fase 2 — Modelo funcional/catálogo.
✓ Fase 3 — UX.
→ Fase 4 — UI EN PROGRESO: dirección y blueprint definidos; render editable y revisión visual pendientes.
○ Fase 5 — Diseño técnico pendiente.
○ Fase 6 — QA/backlog pendiente.


No se habilita todavía construcción. Tampoco se seguirá profundizando UI documentalmente más allá de lo que desbloquee una validación visual real.


14. INICIO FASE 5 — DISEÑO TÉCNICO — 08/08/2026
Se creó TEC-001 — Diseño técnico del MVP — Taco Loco Foodtrack:
https://docs.google.com/document/d/1dn-p3M-VzSEtLCRe2jDfXeE6hxpKliWy_W41AIpMw7k/edit


La Fase 5 se trabaja en paralelo con la materialización visual pendiente de Fase 4, sin abrir el gate de construcción.


Baseline técnica propuesta en TEC-001:
• monolito modular full-stack;
• Next.js + TypeScript;
• PostgreSQL + Prisma;
• autenticación admin mediante sesión server-side y cookie segura;
• Cloudflare R2 / S3-compatible para media;
• Docker Compose sobre VPS + Caddy;
• GitHub Actions para CI/CD;
• backups PostgreSQL offsite en object storage.


Se evaluó explícitamente separar Next.js + NestJS y se descarta para el MVP por introducir dos despliegues, CORS, contratos y mayor superficie operativa sin una necesidad actual. La separación futura sigue siendo posible si aparecen múltiples clientes, integraciones o dominio operacional complejo.


Estado metodológico actualizado:
✓ Fase 0 — Contexto.
✓ Fase 1 — Alcance.
✓ Fase 2 — Modelo funcional/catálogo.
✓ Fase 3 — UX.
→ Fase 4 — UI EN PROGRESO: blueprint cerrado documentalmente; mockups editables/revisión visual pendientes.
→ Fase 5 — DISEÑO TÉCNICO EN PROGRESO en TEC-001.
○ Fase 6 — QA/backlog pendiente.


Construcción continúa BLOQUEADA hasta completar el gate.


15. CIERRE FASE 5 — DISEÑO TÉCNICO — 08/08/2026
TEC-001 fue sometido a revisión crítica de arquitectura y se declara CERRADO para el MVP.


Ajustes de cierre:
• se mantiene monolito modular Next.js + TypeScript;
• se mantiene PostgreSQL + Prisma;
• se elimina priceDelta del esquema inicial por no existir requisito actual;
• no se exige slug de producto;
• el menú público consume el servicio de aplicación server-side y no requiere una API HTTP interna para el primer render;
• se mantiene ProductModifierGroup con cardinalidad por asociación;
• se mantiene archivedAt para retiro lógico seguro;
• no se agregan Redis, colas, microservicios, staging dedicado ni infraestructura distribuida.


Estado metodológico:
✓ Fase 0 — Contexto.
✓ Fase 1 — Alcance.
✓ Fase 2 — Modelo funcional/catálogo.
✓ Fase 3 — UX.
→ Fase 4 — UI EN PROGRESO: mockups/revisión visual pendientes.
✓ Fase 5 — Diseño técnico CERRADO en TEC-001.
→ Fase 6 — QA/backlog habilitada.


Gate de construcción: continúa CERRADO únicamente por Fase 4 visu


16. CIERRE FASE 6 — QA, BACKLOG Y READINESS — 08/08/2026
Se crearon y revisaron:
QA-001 — Criterios de aceptación, matriz de pruebas y Definition of Done:
https://docs.google.com/document/d/1Zo4i4GtzWaIGyJ211AUJnmwU9M4-ko-nTkAvh1eZfT4/edit


BLG-001 — Backlog de construcción MVP:
https://docs.google.com/document/d/1zfHfUhs65PXVLXdYnDlMEW3YKK-Imd42ylLlW24Sa3s/edit


QA-001 cubre menú público, autenticación, administración, categorías, modificadores, imágenes, configuración WhatsApp, responsive, accesibilidad, performance, seguridad, backups, restore, smoke tests y Definition of Done.


BLG-001 ordena la construcción en seis incrementos: Fundación técnica → Catálogo/Auth/Media → Frontend público → Administración → QA/Hardening → Release/Operación, con tickets P0 verificables y dependencias explícitas.


Se completó la revisión cruzada ALC-001/MEN-001/UX-001/TEC-001 ↔ QA-001 ↔ BLG-001. No se detectó expansión silenciosa del alcance.


Estado metodológico actual:
✓ Fase 0 — Contexto.
✓ Fase 1 — Alcance.
✓ Fase 2 — Modelo funcional/catálogo.
✓ Fase 3 — UX.
→ Fase 4 — UI EN PROGRESO: falta materialización/revisión visual editable.
✓ Fase 5 — Diseño técnico CERRADO.
✓ Fase 6 — QA/backlog/readiness CERRADA.


Único punto del gate todavía NO satisfecho: UI principal diseñada y aprobada visualmente. No se comienza TL-001 hasta cerrar formalmente Fase 4.
al.
