## Introducción

Este proyecto es una propuesta para la `Prueba técnica Web Developer NovoPayment`, se realizó con `next` js un framework construido sobre `React` que nos ayuda a instalar las dependencias que necesitamos para crear la aplicación en React.

La aplicación se creó con base al diseño entregado y se realizó una propuesta del diseño mobile donde encontramos un botón hamburguesa que despliega el menú, y los demás componentes se ajustan para su mejor visualización e interacción en pantallas pequeñas.

## Como correr el proyecto

Para `correr` el proyecto en desarrollo:

```bash
npm run dev
```

Para correr el proyecto para producción primero ejecutamos el `build`

```bash
npm run build
```

Después ejecutamos el `start`

```bash
npm run start
```

Abrimos [http://localhost:3000](http://localhost:3000) en el navegador para ver el resultado.

## Arquitectura

### HTML

En la estructura `HTML` se utilizaron etiquetas semánticas para poder adquirir todas la propiedad que por defecto tienes dichas etiquetas, como lo es la accesibilidad y navegación por teclado para personas con alguna discapacidad.
También se agregaron los `meta` tags que nos ayuda a un mejor renderizado de nuestra aplicación.

### CSS

Para los estilos se utilizó un pre-procesador llamado `SASS` que nos ayuda a utilizar variables, mixin, funciones para que nuestro código sea más ordenado, escalable y mantenible.
Se utilizó un sass para cada componente ya que next nos ayuda a independizar cada componente con un style.module.scss y así tener un `scope` de cada uno.
Los estilos también se utilizaron para realizar las animaciones en cada cambio de estado de los componentes cuando el usuario interactúa con la aplicación.

### JS/React

Se dividió el proyecto en componentes que se encuentran en la carpeta `components` estas contienen el .js conde está alojado cada componente con sus eventos, lógica y estados para cambiar controladamente los componentes, en el .scss se encuentran los estilos para ese componente.

Con nextJs podemos encontrar en la carpeta pages todas las páginas o rutas que existen en nuestra aplicación, en la carpeta api podemos encontrar los endPoint los cuales tienen un handler que podemos consumir, en este caso podemos consumir el servicio para armar el menu; tambien podemos encontrar el index.js principal donde hace el llamado de los componentes que se van a renderizar, también hay un complex.js el cual si vamos a la ruta `http://localhost:3000/complex` se renderiza la misma página consumiendo otro api llamado complex, (Complex se hizo para poder alterar el servicio y visualizar la lógica de llamado y renderizado del menú).

Se utilizaron `hooks` para realizar nuestros cambios de estados y así alterar los componentes con una buena reactividad.

### Carpetas

En la carpeta `pages/api` se encuentra un archivo `menu.js` donde está nuestro api que vamos a consumir para armar el menú.
En la carpeta `utils` se encuentran dos archivos el primero `constants` donde se encuentran todas nuestras variables globales para poderlas utilizar en toda la aplicación. y en `index` encontramos las funciones que vamos a utilizar.
En la carpeta `styles` se encuentran los estilos globales y las variables que utilizamos en todos los componentes.

### Renderizado del menu

Para renderizar el menú, se realizó una nueva estructura de datos para poder renderizar mejor los submenús recurrentes; la función sortMenuList() es recurrente y realiza un bucle para armar la nueva estructura de datos.

la nueva estructura de datos es la siguiente: 

```bash
	"data": [
		{
			"name": "",
			"child": [
				{
					"name": "",
					"child": []
				},
				{
					"name": "",
					"child": []
				}
			]
		},
		{
			"name": "",
			"child": []
		},
		{
			"name": "",
			"child": []
		}
	]
```
Con esta estructura de datos podemos realizar el renderizado de los submenús a través del método `map()` con una función recurrente que en este caso es `renderSub()`;

En la data consumida del API podemos observar que las key de cada elemento son string con caracteres especiales; por ende para poder renderizar el texto correcto se crea una objeto `texts` en el archivo `constants.js` donde cada key tiene un valor; entonces cuando consumimos ese key retornamos el valor del key en el objeto texts.





