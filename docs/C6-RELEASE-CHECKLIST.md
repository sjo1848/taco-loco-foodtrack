# Checklist de cierre C6

Este checklist se completa en local. No se sincroniza con Drive automáticamente.

## Inputs externos requeridos

- [ ] Dominio público definitivo para `/menu`.
- [ ] DNS apuntando al servidor productivo.
- [ ] Email de contacto para certificados HTTPS.
- [x] Número de WhatsApp: `+54 9 261 595-6912`.
- [x] Mensaje inicial: `Hola Taco Loco, quiero hacer un pedido.`
- [x] Nombre comercial: `Taco Loco`.
- [ ] Email administrador definitivo; queda pendiente de consulta.
- [ ] Reconciliar el archivo editable de Taco Loco en pen.dev; el documento actualmente conectado muestra otro proyecto.
- [ ] Email de administración definitivo.
- [ ] Contraseña de administración generada y guardada en el gestor de secretos.
- [ ] Cuenta/bucket R2 y credenciales S3 compatibles.
- [ ] Proveedor de backup offsite y política de retención.

## Orden de ejecución

1. Cargar la configuración comercial en `/admin/settings`.
2. Configurar R2 y probar una imagen desde `/admin/products`.
3. Ejecutar QA de menú, login, administración, responsive y accesibilidad.
4. Crear `.env.production` fuera del repositorio.
5. Configurar DNS, Caddy y HTTPS.
6. Ejecutar migraciones con `prisma migrate deploy`.
7. Crear el primer backup productivo y copiarlo offsite.
8. Restaurar una copia en una base temporal y verificar productos/settings.
9. Ejecutar smoke: `/api/health`, `/menu`, login admin, edición y CTA WhatsApp.
10. Generar el QR únicamente con la URL HTTPS estable.
11. Completar el acta de release y decidir el respaldo en Drive.

## Criterio de no release

No se publica mientras exista un placeholder en dominio, WhatsApp, credenciales admin, R2 o backup.
