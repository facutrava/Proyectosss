# Workflow: Crear Landing Page — Lubricentro

## Objetivo
Generar un sitio web completo y personalizado para un lubricentro, partiendo del template base en `sites/lubricentro/`, adaptado con los datos reales del cliente.

## Inputs requeridos
Antes de comenzar, reunir toda esta información del usuario. Si falta algún campo, pedirlo explícitamente.

| Campo | Descripción | Ejemplo |
|---|---|---|
| `nombre` | Nombre comercial del negocio | "LubriFast Centro" |
| `slogan` | Frase corta de posicionamiento | "Rápido, confiable y sin turno" |
| `telefono` | Número de teléfono fijo | "(011) 4523-1234" |
| `whatsapp` | Número completo con código país (sin +) | "5491145231234" |
| `email` | Email de contacto | "info@lubrifast.com.ar" |
| `direccion` | Dirección completa | "Av. San Martín 1234, Ramos Mejía" |
| `ciudad` | Ciudad y provincia | "Buenos Aires, Argentina" |
| `horarios` | Lista de días y horarios | Ver formato en data.json |
| `servicios` | Lista de servicios con precios | Ver formato en data.json |
| `anos_experiencia` | Años en el rubro | 12 |
| `vehiculos_atendidos` | Cantidad estimada de autos atendidos | 3000 |
| `color_primario` | Color principal en hex (opcional) | "#E85D04" |
| `google_maps_embed` | URL del embed de Google Maps (opcional) | "https://maps.google..." |

## Pasos

### Paso 1 — Crear carpeta del cliente
Crear una copia de la carpeta `sites/lubricentro/` con el nombre del cliente en minúsculas y sin espacios.

```
sites/
  lubricentro/          ← template base (NO modificar)
  lubricentro_[cliente]/ ← copia para este cliente
```

Ejemplo: para "Lubri Norte", la carpeta sería `sites/lubricentro_norte/`.

### Paso 2 — Actualizar data.json
Completar `data.json` con todos los datos reales del cliente. Este archivo es la fuente de verdad. No tocar el template base.

Campos obligatorios a reemplazar:
- `negocio.nombre`
- `negocio.slogan`
- `negocio.descripcion`
- `negocio.anos_experiencia`
- `negocio.vehiculos_atendidos`
- `contacto.*` (todos los campos)
- `horarios` (array completo)
- `servicios` (array completo con precios reales)

### Paso 3 — Actualizar index.html
Reemplazar en el HTML todos los valores hardcodeados con los datos del cliente:

**Buscar y reemplazar:**
- `LubriFast` → nombre del cliente
- `(011) 4xxx-xxxx` → teléfono real
- `5491100000000` → WhatsApp real (en los 3 lugares donde aparece)
- `info@lubrifast.com.ar` → email real
- `Av. Ejemplo 1234, Localidad` → dirección real
- `Buenos Aires, Argentina` → ciudad real
- `LubriFast — Lubricentro y Mecánica Rápida` → título SEO personalizado
- `© 2025 LubriFast` → nombre del cliente

**Actualizar servicios:** Reemplazar los precios `$X.XXX` con los precios reales o eliminar la etiqueta si no se muestran precios.

**Actualizar estadísticas:** Años de experiencia, cantidad de vehículos atendidos.

### Paso 4 — Personalizar colores (opcional)
Si el cliente tiene colores de marca propios, actualizar las variables CSS en `:root`:
```css
--primary:    #XXXXXX;
--primary-dk: #XXXXXX;
```

### Paso 5 — Integrar Google Maps (opcional)
Si el usuario proporcionó la URL de Google Maps, reemplazar el div `.map-placeholder` con el iframe embed:
```html
<iframe
  src="[URL_EMBED]"
  width="100%" height="180"
  style="border:0; border-radius:12px;"
  allowfullscreen loading="lazy">
</iframe>
```

### Paso 6 — Verificar el resultado
Abrir el archivo en el browser usando `/run` o indicarle al usuario que abra el archivo directamente. Verificar:
- [ ] Nombre del negocio correcto en navbar y footer
- [ ] Teléfono y WhatsApp funcionan
- [ ] Horarios completos y correctos
- [ ] Servicios con precios
- [ ] Dirección correcta
- [ ] Responsive en mobile (reducir ventana del browser)

### Paso 7 — Guardar en Google Drive (opcional)
Si el usuario lo pide, subir la carpeta del cliente a Google Drive usando el MCP de Google Drive disponible.

## Output esperado
```
sites/
  lubricentro_[cliente]/
    index.html   ← sitio personalizado listo para usar
    data.json    ← datos del cliente
```

## Errores comunes
- **WhatsApp no funciona**: verificar que el número tenga código de país (549 para Argentina) y sin espacios ni guiones.
- **El mapa no se muestra**: el embed de Google Maps tiene que ser la URL de iframe, no la URL normal del mapa.
- **Colores no cambian**: verificar que las variables CSS estén definidas en `:root` y no sobreescritas más abajo.

## Notas
- El template base en `sites/lubricentro/` NUNCA debe modificarse. Siempre trabajar en la copia del cliente.
- Si el cliente no tiene logo, el ícono SVG del navbar funciona bien como placeholder.
- Los precios en Argentina cambian seguido. Si el cliente no quiere mostrar precios, eliminar los elementos `.servicio-tag` del HTML.
