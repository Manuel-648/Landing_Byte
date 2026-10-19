# BITE Burgers

Sitio web estático para presentar **BITE Burgers**, un restaurante ficticio especializado en hamburguesas. El proyecto está hecho principalmente con HTML y CSS, con un pequeño archivo JavaScript para recordar la preferencia del tema visual(dark/light).

## Qué incluye

### Página principal

En `index.html` se encuentra la presentación del restaurante:

- Una barra de navegación que lleva a las secciones de inicio, menú, información del restaurante y ubicación/contacto.
- Una portada con una imagen de fondo y enlaces para consultar el menú o ir a la página de reservas.
- Un menú con productos organizados en hamburguesas, entrantes, postres y bebidas. Cada tarjeta muestra una imagen, una descripción y un precio.
- Filtros para ver una categoría del menú a la vez. Se implementan con controles HTML y CSS, sin JavaScript.
- Una sección «Sobre nosotros» y un pie de página con horarios, dirección, correo electrónico y teléfono.

### Reservas

- `reservar.html` contiene información sobre las reservas y un formulario que solicita nombre, correo electrónico, teléfono y fecha. Los campos obligatorios usan la validación del navegador.
- Al enviar el formulario se abre `reserva-confirmada.html`, que muestra un mensaje de confirmación y permite volver al inicio.
- El proceso es una demostración: el formulario no envía ni almacena la reserva en un servidor.

### Diseño y tema

- `styles.css` reúne los estilos compartidos: colores, tipografías, navegación, portada, menú, tarjetas y pie de página.
- `reservar.css` define la presentación del formulario, la confirmación y el pie de las páginas de reserva.
- El diseño se adapta a pantallas estrechas mediante reglas CSS responsive.
- El selector de tema claro/oscuro está en las páginas. `theme.js` guarda la elección en `localStorage` y restaura el estado del selector al volver a cargar la página; las variables y reglas de `styles.css` aplican los colores.

## Archivos y recursos

| Archivo o carpeta | Contenido |
| --- | --- |
| `index.html` | Página principal del restaurante y menú. |
| `reservar.html` | Formulario de reserva de demostración. |
| `reserva-confirmada.html` | Pantalla de confirmación de demostración. |
| `styles.css` | Estilos generales, menú, tema y adaptación responsive. |
| `reservar.css` | Estilos de las páginas de reserva y confirmación. |
| `theme.js` | Persistencia de la preferencia de tema en el navegador. |
| `images/` | Fotografías de portada, interior, platos y bebidas. |
| `.vscode/launch.json` | Configuración de VS Code para abrir el sitio en Chrome en `http://localhost:8080`. |

## Tecnologías

- HTML para el contenido y la estructura.
- CSS para el diseño, los filtros del menú y los temas.
- JavaScript para recordar el tema seleccionado.
- Bootstrap 5.3.3, cargado desde jsDelivr, para componentes de navegación.
- Fuentes Archivo Black y DM Sans, cargadas desde Google Fonts.

Bootstrap y Google Fonts se cargan desde internet, por lo que esas dependencias visuales externas requieren conexión. 
