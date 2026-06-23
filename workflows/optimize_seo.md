# Workflow: Optimizar SEO — Lubricentro

## Objetivo
Auditar y mejorar el SEO on-page de un sitio de lubricentro para que aparezca en Google cuando alguien busca "lubricentro en [zona]" o "cambio de aceite cerca".

## Por qué importa
Un lubricentro compite localmente. El 80% de sus búsquedas son del tipo "lubricentro [barrio]" o "cambio de aceite [ciudad]". El SEO local bien hecho puede ser la diferencia entre aparecer primero o no aparecer.

## Inputs requeridos

| Campo | Descripción |
|---|---|
| `ruta_html` | Ruta al archivo index.html del cliente |
| `nombre` | Nombre del negocio |
| `zona` | Barrio, localidad o ciudad donde opera |
| `servicios_principales` | 2-3 servicios que más quiere posicionar |
| `competencia` | Nombres de lubricentros cercanos (opcional, para análisis) |

## Pasos

### Paso 1 — Auditoría inicial
Leer el `index.html` y verificar los siguientes elementos:

**Checklist de auditoría:**
- [ ] `<title>` presente y con keyword + zona (max 60 chars)
- [ ] `<meta name="description">` presente (max 155 chars), incluye servicios y zona
- [ ] `<meta name="keywords">` con términos locales
- [ ] `<h1>` único en la página, contiene keyword principal
- [ ] `<h2>` en secciones clave (Servicios, Contacto, etc.)
- [ ] Atributos `alt` en todas las imágenes
- [ ] Texto de la página menciona zona/ciudad al menos 3 veces de forma natural
- [ ] Dirección escrita en formato completo (calle, número, localidad, provincia)
- [ ] Número de teléfono en texto plano (no solo en imagen)
- [ ] Horarios en texto plano (no solo en imagen o tabla compleja)
- [ ] URL de WhatsApp usa el número correcto

### Paso 2 — Corregir title y meta description
Si no están bien, reescribirlos con esta estructura:

**Title:**
```
[Nombre] | Lubricentro en [Zona] — Cambio de Aceite y Service
```
Máximo 60 caracteres. Contar siempre.

**Meta description:**
```
Lubricentro [Nombre] en [Zona]. Cambio de aceite, filtros y frenos sin turno. +[N] clientes. Abierto lunes a sábado. ☎ [teléfono]
```
Máximo 155 caracteres. Incluir teléfono si entra.

### Paso 3 — Agregar Schema Markup (JSON-LD)
Insertar antes del `</head>` el siguiente bloque con los datos del cliente:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "[NOMBRE]",
  "description": "[DESCRIPCION CORTA]",
  "url": "[URL DEL SITIO si tiene]",
  "telephone": "[TELEFONO]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[CALLE Y NUMERO]",
    "addressLocality": "[LOCALIDAD]",
    "addressRegion": "[PROVINCIA]",
    "addressCountry": "AR"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "13:00"
    }
  ],
  "priceRange": "$$",
  "servesCuisine": null
}
</script>
```

El Schema Markup hace que Google entienda que el sitio es un negocio local y puede mostrar horarios, dirección y teléfono directamente en los resultados de búsqueda.

### Paso 4 — Optimizar keywords en el texto
Verificar que el texto del sitio mencione de forma natural:
- "[Zona] + lubricentro" o "lubricentro en [zona]" — al menos 2 veces
- "cambio de aceite" — al menos 2 veces
- Nombre de los servicios principales — 1 vez cada uno
- "sin turno" o "sin turno previo" — si es una ventaja del negocio

Si faltan, agregarlos donde queden naturales. No forzar ni repetir en exceso.

### Paso 5 — Open Graph (para redes sociales)
Agregar dentro del `<head>` para que al compartir el link en WhatsApp o Facebook se vea bien:

```html
<meta property="og:title" content="[NOMBRE] — Lubricentro en [ZONA]" />
<meta property="og:description" content="[META DESCRIPTION]" />
<meta property="og:type" content="business.business" />
<meta property="og:locale" content="es_AR" />
```

### Paso 6 — Verificación final
Re-leer el HTML y confirmar:
- [ ] Title y meta description correctos y dentro del límite de caracteres
- [ ] Schema JSON-LD insertado sin errores de sintaxis (JSON válido)
- [ ] Keywords en el texto de forma natural
- [ ] Open Graph completo

## Output esperado
El `index.html` actualizado con todos los cambios aplicados. Informar al usuario qué se cambió y por qué.

## Notas
- El SEO local mejora con el tiempo. Estos cambios on-page son el primer paso; el segundo es dar de alta el negocio en Google Business Profile (eso lo hace el cliente directamente).
- No usar keywords en exceso. Google penaliza el "keyword stuffing". Si ya está mencionado 3 veces, no agregar más.
- El Schema de tipo `AutoRepair` es el más específico para lubricentros y mecánicas. Usarlo siempre sobre el genérico `LocalBusiness`.
