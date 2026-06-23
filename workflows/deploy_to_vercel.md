# Workflow: Deploy a Vercel — Lubricentro

## Objetivo
Publicar el sitio de un lubricentro online de forma gratuita usando Vercel, para que el cliente pueda verlo desde cualquier dispositivo con una URL real.

## Cuándo usar este workflow
- El sitio está completo y verificado localmente
- El cliente quiere ver el resultado online antes de apuntar su dominio
- Se necesita una URL para compartir o para el negocio

## Prerequisitos
- [ ] Vercel CLI instalado: `npm install -g vercel`
- [ ] Cuenta en vercel.com (gratuita, con GitHub o email)
- [ ] El sitio del cliente está completo en `sites/lubricentro_[cliente]/`
- [ ] Verificado localmente (abrir en browser sin errores)

## Pasos

### Paso 1 — Verificar el sitio antes de deployar
Checklist mínimo antes de publicar:

- [ ] Nombre del negocio correcto (no dice "LubriFast" si el cliente es otro)
- [ ] Teléfono y WhatsApp reales y funcionando
- [ ] Dirección correcta
- [ ] No hay precios placeholder (`$X.XXX`)
- [ ] No hay textos de ejemplo sin reemplazar
- [ ] Las imágenes cargan (si hay assets en `/assets/`)
- [ ] El sitio se ve bien en mobile (ventana a 375px)

Si algo falla, corregirlo antes de continuar. No deployar un sitio con datos de ejemplo.

### Paso 2 — Inicializar Vercel en la carpeta del cliente
Desde la terminal, posicionarse en la carpeta del cliente:

```powershell
cd "c:\Users\facut\OneDrive\Escritorio\Proyectos\sites\lubricentro_[cliente]"
vercel
```

En el asistente interactivo de Vercel, responder:
- **Set up and deploy**: Yes
- **Which scope**: tu cuenta personal
- **Link to existing project**: No (primera vez)
- **Project name**: `lubricentro-[cliente]` (en minúsculas, sin espacios)
- **In which directory is your code**: `.` (punto, directorio actual)
- **Override settings**: No

Vercel detecta automáticamente que es un sitio estático y lo deploya sin configuración adicional.

### Paso 3 — Obtener la URL de preview
Al terminar el deploy, Vercel muestra una URL del tipo:
```
https://lubricentro-[cliente].vercel.app
```

Abrir la URL y verificar:
- [ ] El sitio carga correctamente
- [ ] WhatsApp funciona desde mobile
- [ ] Las imágenes se ven (verificar que los paths relativos funcionen)
- [ ] La página se ve bien en mobile (abrir desde el celular)

### Paso 4 — Deploy a producción (si todo está OK)
Si la preview está bien, promover a producción:

```powershell
vercel --prod
```

Esto genera la URL definitiva que el cliente puede usar.

### Paso 5 — Guardar la URL
Agregar la URL al `data.json` del cliente:

```json
{
  "deploy": {
    "url_vercel": "https://lubricentro-[cliente].vercel.app",
    "fecha_deploy": "2025-XX-XX",
    "estado": "produccion"
  }
}
```

### Paso 6 (opcional) — Conectar dominio propio
Si el cliente tiene un dominio (ej: `lubrifast.com.ar`), conectarlo desde el panel de Vercel:

1. Ir a vercel.com → proyecto → Settings → Domains
2. Agregar el dominio del cliente
3. Vercel muestra los registros DNS a configurar (A record o CNAME)
4. El cliente los configura en su proveedor de dominio (NIC.ar, GoDaddy, etc.)

**Tiempo de propagación:** 15 minutos a 48 horas según el proveedor.

## Updates futuros
Cuando el cliente pida cambios en el sitio:

1. Modificar el `index.html` o `data.json` localmente
2. Verificar en browser
3. Desde la carpeta del cliente, ejecutar:
```powershell
vercel --prod
```

Vercel detecta los cambios y publica la nueva versión automáticamente.

## Errores comunes

**"vercel: command not found"**
→ Instalar con `npm install -g vercel` y reiniciar la terminal.

**Las imágenes no cargan en producción**
→ Verificar que los paths sean relativos (`assets/hero.jpg`) y no absolutos (`C:\Users\...`).

**El sitio carga pero está desactualizado**
→ Forzar redeploy: `vercel --force --prod`

**"Project already exists"**
→ Si ya fue deployado antes, correr `vercel --prod` directamente en lugar de `vercel`.

## Output esperado
- URL pública funcional del sitio del cliente
- URL guardada en `data.json` del cliente
- Sitio accesible desde cualquier dispositivo

## Notas
- Vercel es gratuito para proyectos estáticos sin límite de proyectos en el plan hobby.
- Cada deploy genera una URL única de preview. Vercel guarda el historial completo de versiones.
- Para deploy masivo en el futuro, este proceso puede automatizarse con Vercel CLI en un script Python que itera sobre todas las carpetas en `sites/`.
