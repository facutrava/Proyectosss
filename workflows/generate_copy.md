# Workflow: Generar Copy — Lubricentro

## Objetivo
Redactar todos los textos del sitio web de un lubricentro: slogan, descripciones de servicios, sección "por qué elegirnos", y textos de contacto. El copy debe sonar local, directo y confiable — sin exageraciones corporativas.

## Inputs requeridos

| Campo | Descripción |
|---|---|
| `nombre` | Nombre del negocio |
| `zona` | Barrio o localidad donde opera |
| `anos_experiencia` | Años en el rubro |
| `diferenciador` | Qué lo hace distinto (precio, rapidez, atención, especialidad) |
| `tipos_vehiculo` | Autos, camionetas, SUVs, motos, camiones, etc. |
| `servicios_principales` | Lista de servicios que ofrece |
| `tono` | Formal, cercano, técnico (por defecto: cercano) |

## Pasos

### Paso 1 — Generar slogan
Crear 3 opciones de slogan basadas en el diferenciador principal. Criterios:
- Máximo 8 palabras
- Sin tecnicismos
- Que transmita velocidad, confianza o experiencia (según el diferenciador)
- Adaptado a la zona (ejemplo: "El lubricentro de [Barrio]" funciona bien en zonas específicas)

**Ejemplos de estructura:**
- `"[Servicio] rápido, sin turno y con garantía"` → para diferenciador de rapidez
- `"15 años cuidando los autos de [Zona]"` → para diferenciador de trayectoria
- `"Hacemos bien lo que otros hacen rápido"` → para diferenciador de calidad

Presentar las 3 opciones al usuario y esperar confirmación antes de continuar.

### Paso 2 — Descripción hero (subtítulo)
Redactar 2-3 líneas que aparecen bajo el titular en el hero. Debe:
- Mencionar los servicios principales
- Incluir la zona si es relevante
- Terminar con un beneficio concreto (garantía, rapidez, precios, etc.)
- Máximo 30 palabras

### Paso 3 — Descripciones de servicios
Para cada servicio de la lista, redactar:
- **Título**: 2-4 palabras, claro y directo
- **Descripción**: 2 líneas máximo. Qué incluye, qué marca usan, qué garantía tiene.

Servicios típicos de lubricentro y sus puntos de venta:
| Servicio | Punto de venta sugerido |
|---|---|
| Cambio de aceite | Marcas de primera, incluye revisión de líquidos |
| Filtros | Repuestos originales o equivalentes |
| Frenos | Diagnóstico visual incluido |
| Baterías | Diagnóstico del alternador sin cargo |
| Refrigerante | Control del sistema completo |
| Service completo | El paquete más elegido, todo en una visita |

### Paso 4 — Sección "Por qué elegirnos"
Redactar 4 ventajas concretas. Cada una:
- Icono sugerido (emoji)
- Frase corta (max 12 palabras)
- Sin adjetivos vacíos ("excelente", "inigualable", "superior")

Usar datos reales cuando sea posible: años, cantidad de clientes, tiempo de servicio.

**Estructura sugerida:**
1. Velocidad del servicio
2. Experiencia / trayectoria
3. Comunicación post-visita (recordatorio de próximo service)
4. Medios de pago aceptados

### Paso 5 — Textos de confianza (trust bar)
4 frases cortas para la barra naranja bajo el hero:
- Garantía en todos los servicios
- Tiempo de servicio (ej: "Service en 30 minutos")
- Marca o estándar de calidad
- Acceso sin turno

Adaptar con datos reales del negocio si los hay.

### Paso 6 — Texto de WhatsApp predefinido
Redactar el mensaje que se abre automáticamente al hacer clic en WhatsApp. Debe:
- Ser corto (1 línea)
- Identificar que viene del sitio web
- Facilitar que el local responda rápido

**Formato:** `"Hola [Nombre]! Vi tu web y quiero consultar sobre [servicio/turno]."`

### Paso 7 — Textos SEO
Redactar:
- **Título de página** (max 60 caracteres): `[Nombre] | Lubricentro en [Zona]`
- **Meta descripción** (max 155 caracteres): incluir servicios principales + zona + llamado a la acción
- **Keywords** (5-8 términos): lubricentro + zona, cambio de aceite + zona, etc.

## Output esperado
Un documento con todos los textos listos para copiar al `data.json` y al `index.html`. Organizado por sección.

## Notas
- Evitar el copy genérico de agencia. "Somos líderes en el sector" no dice nada. "15 años en Villa del Parque" sí.
- Los precios en Argentina varían mucho. Si los muestran, aclarar "precio de referencia" o actualizar frecuentemente.
- El tono "cercano" funciona mejor para este rubro: el cliente del lubricentro quiere sentir que habla con alguien de confianza, no con una corporación.
