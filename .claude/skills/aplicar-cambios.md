# Skill: aplicar-cambios

Aplica cambios en `My Money/index.html` end-to-end: edita el archivo, commitea y pushea a main para que Netlify dispare el deploy automáticamente.

## Objetivo

Recibir una descripción de cambios (CSS, HTML o JavaScript), aplicarlos al index.html, y dejar el deploy en curso en Netlify sin intervención manual.

## Inputs

- `$ARGUMENTS`: descripción del cambio a aplicar (opcional si ya está en el contexto de la conversación)

## Proceso

1. **Leer el archivo** — usar Read en `My Money/index.html` para obtener el estado actual
2. **Identificar la sección exacta** — localizar el bloque a modificar (CSS, HTML estructural o bloque JS)
3. **Aplicar con Edit** — usar Edit con old_string/new_string exactos, cambios mínimos
4. **Si el cambio afecta JS y CSS** — aplicar primero CSS luego JS
5. **Git add** — `git add "My Money/index.html"`
6. **Git commit** — mensaje descriptivo en español que resuma el cambio, con co-author de Claude
7. **Git push** — `git push origin main`
8. **Confirmar** — reportar qué cambió, el hash del commit y que Netlify iniciará el deploy

## Reglas

- Siempre usar Edit (nunca Write/reescritura completa salvo que sea estrictamente necesario)
- Un cambio lógico por llamada a Edit
- Preservar indentación, comillas y convenciones de estilo existentes
- Si hay ambigüedad en el pedido, preguntar antes de editar
- No hacer push si la edición falló o produjo un resultado inesperado
- El mensaje de commit debe reflejar el cambio funcional, no la mecánica ("agrega subcategoría Regalos en Otros", no "edita index.html")

## Output esperado

- Qué cambió y en qué sección (CSS / HTML / JS)
- Hash corto del commit
- Confirmación de push exitoso → Netlify iniciará deploy automáticamente
