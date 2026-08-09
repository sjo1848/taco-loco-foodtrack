---
drive_title: PRE-DEV-001 — Etapas de análisis antes de construcción — Taco Loco Foodtrack
drive_url: https://docs.google.com/document/d/1fujsupY4XBvpYlkOs4Olay1HLaAinn6ViaCW2emZ1uk
source: Google Drive mirror
---

﻿PRE-DEV-001 — ETAPAS DE ANÁLISIS ANTES DE CONSTRUCCIÓN
Taco Loco Foodtrack


Fecha: 07/08/2026
Estado: Plan de trabajo pre-construcción
Objetivo: definir exactamente qué vamos a analizar antes de programar, registrar lo ya resuelto y poner un límite explícito al análisis para pasar rápido a construcción.


1. PRINCIPIO DE TRABAJO


Taco Loco Foodtrack no es, en esta etapa, un proyecto complejo. El objetivo inmediato es un menú digital mobile-first accesible por QR, con administración básica de catálogo, precios y disponibilidad. Por lo tanto, no se realizará una fase extensa de discovery ni documentación exhaustiva.


Regla principal: analizar solo aquello que reduzca riesgo real de retrabajo durante la construcción.


No se bloqueará el desarrollo por información que pueda resolverse después mediante configuración o cambios simples.


2. CONTEXTO YA LEVANTADO


Ya está definido:
• Taco Loco opera como foodtruck tradicional.
• Actualmente recibe pedidos por WhatsApp.
• El MVP será un menú digital accesible por QR, sin instalación ni registro para el cliente.
• La experiencia será mobile-first.
• El menú no será una imagen estática de la carta.
• El negocio podrá modificar precios y disponibilidad desde administración.
• Disponible / agotado forma parte del MVP.
• Se conservará la identidad visual de Taco Loco, adaptada a interfaz móvil.
• Se identificaron las categorías principales: tacos, nachos, quesadillas, pizzas, más delicias, salsas, bebidas y tragos.
• Se extrajo un catálogo inicial de las dos cartas aportadas.
• Existen productos con opciones, por ejemplo carne o salsa a elección.
• Se prevé una evolución futura hacia pedidos, pero no condicionará innecesariamente el MVP.
• La cantidad de mesas no es un requisito del MVP.
• La frecuencia de actualización de precios tampoco condiciona el diseño: el sistema simplemente permitirá editarlos.
• Arquitectura conceptual inicial: área pública /menu y área operativa /admin.
• No se justifica microservicios; una solución simple/modular es suficiente.


3. LO QUE TODAVÍA FALTA DEFINIR ANTES DE CODEAR


Solo necesitamos cerrar cinco bloques.


ETAPA A — CIERRE DEL ALCANCE MVP
Objetivo: congelar qué entra y qué no entra en la primera versión.


Definir:
• funciones exactas del menú público;
• funciones exactas del panel administrador;
• qué datos puede editar el negocio;
• comportamiento de productos agotados;
• uso de promociones/destacados;
• si el MVP solo muestra el menú o también ofrece un acceso directo a WhatsApp para pedir.


Salida esperada: alcance MVP cerrado y lista explícita de fuera de alcance.
Criterio de cierre: no quedan funciones ambiguas que impidan empezar a construir.


ETAPA B — CATÁLOGO Y MODELO FUNCIONAL MÍNIMO
Objetivo: convertir las cartas en datos consistentes.


Definir:
• categorías definitivas;
• productos;
• nombre, descripción, precio e imagen;
• disponibilidad;
• opciones y complementos;
• orden de visualización;
• datos actualmente dudosos de las cartas.


Modelo mínimo previsto:
Category → Product → Option/Modifier
Product → Price / Description / Image / Availability


No se diseñará todavía inventario, recetas, costos ni stock por ingrediente.


Salida esperada: MEN-001 cerrado.
Criterio de cierre: sabemos exactamente qué estructura necesita la base de datos para representar el menú actual.


ETAPA C — UX MÍNIMA Y FLUJOS CRÍTICOS
Objetivo: definir la experiencia suficiente para construir sin improvisar pantallas.


Solo se diseñarán los flujos necesarios:
1. QR → menú.
2. Navegación por categorías.
3. Visualización de producto y opciones.
4. Producto agotado.
5. Admin → listado de productos.
6. Admin → editar producto/precio/disponibilidad.


Pantallas previstas:
• menú principal;
• listado/secciones por categoría;
• detalle de producto solo si aporta valor;
• login admin;
• catálogo admin;
• edición de producto.


No se hará un Design System completo. Se definirán únicamente estilos, componentes y estados necesarios para el MVP.


Salida esperada: wireframes o especificación UX suficiente para implementación.
Criterio de cierre: cada pantalla necesaria tiene propósito, contenido, acción principal y estados básicos definidos.


ETAPA D — DISEÑO TÉCNICO MÍNIMO
Objetivo: tomar las decisiones técnicas que sí afectan la implementación.


Definir:
• stack definitivo;
• estructura de frontend/backend;
• base de datos;
• modelo de datos final del MVP;
• autenticación del administrador;
• almacenamiento de imágenes;
• generación y destino del QR;
• estrategia básica de despliegue;
• configuración de entorno y secretos;
• estructura inicial del repositorio.


No se analizarán patrones complejos sin necesidad. No CQRS, microservicios, event sourcing ni infraestructura sobredimensionada para este alcance.


Salida esperada: arquitectura técnica breve + esquema de datos.
Criterio de cierre: podemos crear el repositorio/proyecto y desarrollar sin decisiones estructurales pendientes.


ETAPA E — QA Y PLAN DE CONSTRUCCIÓN
Objetivo: entrar a código con criterios claros de terminado.


Definir:
• criterios de aceptación del menú;
• criterios de aceptación del admin;
• pruebas responsive;
• validación de precios y datos;
• navegación y estados de error;
• performance básica en conexión móvil;
• accesibilidad mínima;
• seguridad básica del panel administrador;
• smoke tests posteriores al despliegue.


Luego dividir la construcción en tickets pequeños y ejecutables.


Salida esperada: checklist QA + backlog inicial de construcción.
Criterio de cierre: cada bloque de desarrollo puede comprobarse objetivamente.


4. ORDEN DE EJECUCIÓN


Estado actual → A. Alcance → B. Catálogo/modelo → C. UX → D. Diseño técnico → E. QA/backlog → CONSTRUCCIÓN.


Las etapas pueden solaparse cuando una decisión sea evidente. No necesitamos convertir cada una en una fase larga.


5. LÍMITE EXPLÍCITO AL ANÁLISIS


Antes de codear NO vamos a desarrollar en profundidad:
• sistema de pedidos completo;
• pedidos por mesa;
• KDS/cocina;
• caja/POS;
• pagos online;
• delivery;
• stock e inventario;
• analítica avanzada;
• roles y permisos complejos;
• arquitectura distribuida;
• microservicios;
• sistema de eventos;
• Design System completo;
• optimizaciones prematuras;
• investigación extensa del funcionamiento del foodtruck.


Estas cuestiones se tratarán solo cuando una versión futura las necesite.


6. FOTO DEL ESTADO ACTUAL


A. Alcance MVP — EN PROGRESO / bastante definido.
B. Catálogo y modelo funcional — EN PROGRESO / catálogo inicial ya extraído.
C. UX — INICIADO / dirección general definida, faltan flujos y pantallas concretas.
D. Diseño técnico — PENDIENTE / solo existe arquitectura conceptual inicial.
E. QA y backlog — PENDIENTE.
Construcción — NO INICIADA.


7. PENDIENTES CONCRETOS ACTUALES


• Cerrar exactamente el alcance del MVP.
• Decidir si el botón/pedido por WhatsApp forma parte de esta primera versión.
• Validar algunos textos dudosos de la carta: nombre exacto de Nachos Picosso/Picossco, ingredientes de Quesadillas especial y precio aplicable a los tragos.
• Formalizar estructura de categorías, productos y opciones.
• Diseñar los flujos mínimos del cliente y del administrador.
• Elegir stack y despliegue.
• Definir modelo de datos.
• Definir criterios de aceptación y backlog de construcción.


8. GATE PARA EMPEZAR A CODEAR


Se empieza a construir cuando podamos responder sí a estas preguntas:
• ¿Sabemos exactamente qué incluye el MVP?
• ¿El catálogo puede representarse con el modelo definido?
• ¿Sabemos qué pantallas hay que construir y cómo se recorren?
• ¿Está elegido el stack y la forma básica de desplegar?
• ¿Tenemos criterios de aceptación para probar lo construido?


No será requisito tener documentación exhaustiva. Con esos cinco puntos cerrados, termina el análisis previo y comienza la implementación.


9. DOCUMENTOS DE REFERENCIA


• Taco Loco Foodtrack — Documento maestro: fuente viva de contexto, decisiones y catálogo.
• PRE-DEV-001: documento rector de las etapas previas a construcción.
• MEN-001: se cerrará dentro de la Etapa B.
• UX-001: se cerrará dentro de la Etapa C.


Decisión de gestión: mantener el análisis corto, incremental y orientado a construcción. Cualquier análisis nuevo deberá justificar qué riesgo de implementación evita o qué decisión necesaria permite tomar.


10. ACTUALIZACIÓN DE GOBERNANZA


PRE-DEV-001 queda como antecedente de planificación inicial. A partir del 07/08/2026, PRE-DEV-002 — Proceso profesional, roles y gate de construcción pasa a ser la referencia canónica para las etapas previas a construcción. La revisión incorpora explícitamente UI/Visual Design como disciplina separada de UX y define los roles profesionales de consultora que deben cubrirse, aunque varias responsabilidades sean asumidas por una misma persona en este proyecto.
