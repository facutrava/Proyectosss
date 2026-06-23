# Workflow: Construir desde Canva — Lubricentro

## Objetivo
Usar el MCP de Canva (ya conectado) para generar assets visuales del lubricentro — hero image, logo placeholder, banners de servicios — e integrarlos al sitio HTML.

## Cuándo usar este workflow
- El cliente tiene identidad visual propia y quiere que el sitio la refleje
- Se necesita un hero visual específico (foto del local, banner de promoción)
- Se quiere probar distintos estilos de diseño antes de codear

## Inputs requeridos

| Campo | Descripción |
|---|---|
| `nombre` | Nombre del negocio |
| `colores` | Colores de marca (hex o descripción) |
| `estilo` | Moderno industrial / Clásico / Minimalista |
| `assets_necesarios` | Qué imágenes se necesitan (hero, servicios, banner, etc.) |
| `texto_en_imagen` | Si las imágenes deben llevar texto superpuesto |

## Pasos

### Paso 1 — Definir qué assets se necesitan
Consultar con el usuario qué imágenes quiere generar. Opciones típicas para lubricentro:

| Asset | Uso en el sitio | Dimensiones sugeridas |
|---|---|---|
| Hero background | Fondo de la sección principal | 1440×800px |
| Banner servicios | Imagen decorativa en la sección servicios | 800×400px |
| Ícono/logo | Reemplazar el ícono SVG del navbar | 200×200px (cuadrado) |
| Banner promoción | Sección hero o pop-up | 1200×600px |

### Paso 2 — Generar el diseño en Canva
Usar el MCP de Canva con `mcp__claude_ai_Canva__generate-design` o `mcp__claude_ai_Canva__generate-design-structured`.

**Prompt base para hero de lubricentro:**
```
Professional auto service / oil change shop hero image.
Dark industrial feel. Color palette: [COLOR_PRIMARIO] orange accent on dark background.
Clean, modern. No people. Car engine or oil drop concept.
Text overlay area on the left side (empty, reserved for headline).
16:9 ratio.
```

**Prompt base para banner de servicios:**
```
Auto mechanic tools flat lay. Dark surface, orange accents.
Wrench, oil filter, gear icons. Professional, clean.
No text. Wide banner format.
```

Adaptar el prompt con los colores y estilo del cliente.

### Paso 3 — Exportar el asset
Usar `mcp__claude_ai_Canva__export-design` para exportar en PNG o JPG.

Configuración de exporta:
- Formato: PNG para logos/íconos con transparencia, JPG para backgrounds
- Calidad: alta
- Guardar en: `sites/lubricentro_[cliente]/assets/`

Si la carpeta `assets/` no existe, crearla primero.

### Paso 4 — Integrar al HTML
Dependiendo del asset generado, integrarlo al HTML:

**Hero background:**
```css
.hero {
  background-image: url('assets/hero.jpg'), radial-gradient(...);
  background-size: cover;
  background-position: center;
}
```

**Imagen en sección servicios:**
```html
<img src="assets/banner-servicios.jpg" alt="Herramientas de lubricentro" 
     style="width:100%; border-radius:16px; margin-top:32px;" />
```

**Logo en navbar:**
Reemplazar el `<div class="navbar-brand-icon">` con:
```html
<img src="assets/logo.png" alt="[NOMBRE]" style="height:38px;" />
```

### Paso 5 — Ajustar colores del sitio
Si el asset de Canva tiene colores distintos a los del template, actualizar las variables CSS para que el sitio sea coherente con el material visual:

```css
:root {
  --primary:    #[COLOR_PRINCIPAL_DEL_ASSET];
  --primary-dk: #[VERSION_OSCURA];
  --dark:       #[COLOR_FONDO];
}
```

### Paso 6 — Verificar coherencia visual
Abrir el sitio en el browser y verificar:
- [ ] El asset se ve bien en pantallas de 1440px, 1024px y 375px (mobile)
- [ ] El texto del hero sigue siendo legible sobre el nuevo fondo
- [ ] Los colores del site coinciden con los del material de Canva
- [ ] Las imágenes no ralentizan la carga (si pesan más de 500KB, comprimir)

## Compresión de imágenes (si es necesario)
Si las imágenes exportadas pesan demasiado, usar la herramienta de Python disponible en `tools/` si existe, o indicar al usuario que use squoosh.app para comprimirlas antes de incluirlas.

## Output esperado
```
sites/lubricentro_[cliente]/
  assets/
    hero.jpg
    banner-servicios.jpg    (opcional)
    logo.png                (opcional)
  index.html   ← actualizado con referencias a los nuevos assets
  data.json
```

## Notas
- Canva genera imágenes de alta calidad pero a veces con texto en inglés. Revisar siempre antes de usar.
- Si el cliente ya tiene fotos propias del local, priorizarlas sobre las generadas. Las fotos reales convierten mejor.
- Los backgrounds muy oscuros pueden hacer que el texto del hero sea ilegible. Siempre verificar contraste.
- Si Canva tarda o falla, alternativa: usar un color sólido oscuro con el patrón SVG del template (ya incluido en el hero actual).
