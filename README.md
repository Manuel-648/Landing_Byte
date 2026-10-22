# BITE Burgers

Sitio web estático para presentar **BITE Burgers**, un restaurante ficticio especializado en hamburguesas. El proyecto está hecho principalmente con HTML, Sass y CSS, con un pequeño archivo JavaScript para recordar la preferencia del tema visual (claro/oscuro).


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

- `styles.scss` es la hoja de estilos fuente. `styles.css` es su versión compilada y reúne los estilos compartidos: colores, tipografías, navegación, portada, menú, tarjetas y pie de página.
- `reservar.css` define la presentación del formulario, la confirmación y el pie de las páginas de reserva.
- El diseño se adapta a pantallas estrechas mediante reglas CSS responsive.
- El selector de tema claro/oscuro está en las páginas. `theme.js` guarda la elección en `localStorage` y restaura el estado del selector al volver a cargar la página; las variables y reglas de `styles.css` aplican los colores.

## Sass, compilación y publicación

La hoja `styles.scss` incluye el mixin `centrar-contenido`, la función personalizada `rem()` y las funciones nativas `math.div()` y `color.adjust()`. Las páginas cargan `styles.css`, por lo que el CSS compilado se mantiene en el repositorio para que GitHub Pages pueda servirlo sin ejecutar Sass.

Con Node.js instalado, instala Sass y compila los estilos:

```sh
npm ci
npm run build:css
```

Durante el desarrollo, `npm run watch:css` recompila el CSS cada vez que guardas cambios en `styles.scss`.

Para publicar desde una rama, en **Settings → Pages** selecciona **Deploy from a branch**, la rama `sass` y la carpeta `/(root)`. Cada cambio de `styles.scss` debe compilarse y guardarse junto con el `styles.css` actualizado.

## Archivos y recursos

| Archivo o carpeta | Contenido |
| --- | --- |
| `index.html` | Página principal del restaurante y menú. |
| `reservar.html` | Formulario de reserva de demostración. |
| `reserva-confirmada.html` | Pantalla de confirmación de demostración. |
| `styles.scss` | Fuente Sass con variables, mixin y funciones. |
| `styles.css` | CSS compilado servido por las páginas. |
| `reservar.css` | Estilos de las páginas de reserva y confirmación. |
| `package.json` y `package-lock.json` | Dependencia de Sass y comandos de compilación. |
| `theme.js` | Persistencia de la preferencia de tema en el navegador. |
| `images/` | Fotografías de portada, interior, platos y bebidas. |
| `.vscode/launch.json` | Configuración de VS Code para abrir el sitio en Chrome en `http://localhost:8080`. |

## Tecnologías

- HTML para el contenido y la estructura.
- Sass y CSS para el diseño, los filtros del menú y los temas.
- JavaScript para recordar el tema seleccionado.
- Dart Sass para compilar `styles.scss` en `styles.css`.
- Bootstrap 5.3.3, cargado desde jsDelivr, para componentes de navegación.
- Fuentes Archivo Black y DM Sans, cargadas desde Google Fonts.

Bootstrap y Google Fonts se cargan desde internet, por lo que esas dependencias visuales externas requieren conexión. 
