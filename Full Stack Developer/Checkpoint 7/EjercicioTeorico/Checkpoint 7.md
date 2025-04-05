# Cuestiones teóricas

## 1. ¿Qué diferencia a Javascript de cualquier otro lenguaje de programación?

<img src="./images/Javascript.jpg" alt="Lenguaje de programación Javascript" width="1200" height="500">

**Javascript** es un lenguaje de programación creado en 1995 por el programador estadounidense **Brendan Eich**. Este lenguaje de programación es único ya que puede ser **interpretado por los navegadores web** y se utiliza fundamentalmente para hacer que las páginas web sean interactivas y dinámicas. Constituye uno de los tres pilares del desarrollo web, junto con:

 - **HTML**, usado para la estructura de la página web.  
 - **CSS**, usado para el diseño y estilo de la página web. 
 - **JavaScript**, usado para agregar dinamicidad e interactividad a la página web.

Originariamente, JavaScript fue creado con el propósito de añadir interactividad y dinamicidad a las páginas web, tales como:

- Validación de formularios sin necesidad de recargar la página web. 
- Uso de menús desplegables.  
- Creación de sliders, carruseles o efectos visuales.  
- Carga de contenido sin recargar la página.
- Creación de juegos, animaciones y aplicaciones en el navegador.  

Actualmente también es posible usar Javascript fuera del navegador, utilizando alguna de las siguientes herramientas:

- **Node.js**: es un entorno de ejecución de JavaScript gratuito, de código abierto y multiplataforma que permite a los desarrolladores crear servidores, aplicaciones web, herramientas de línea de comandos y scripts.
- **React Native**: es un entorno de trabajo de JavaScript para crear aplicaciones reales nativas para iOS y Android, basado en la librearía de JavaScript React para la creación de componentes visuales.
- **Electron**: es un entorno de trabajo utilizado para crear aplicaciones de escritorio con JavaScript, HTML y CSS. 

Además de ser el único lenguaje de programación interpretado por los navegadores web, Javascript presenta otras características que lo hacen atractivo para el conjunto de los programadores: 

### Lenguaje interpretado 

A diferencia de otros lenguajes de programación como Fortran, Java o C++, que precisan de una compilación, Javascript se interpreta a tiempo real en los navegadores web.

### Tipado dinámico

Las variables de Javascript no tienen un tipo (véase la pregunta 2 de este documento) fijo, es decir, pueden cambiar de tipo en cualquier línea de código. Esto puede resultar práctico pero también una fuente de errores y no es del agrado de muchos desarrolladores. Un ejemplo de tipado dinámico es el siguiente:
```js
let fruta = 'melon'; // La variable fruta es una cadena.
console.log(fruta);
fruta = 27; // Ahora es un número entero.
console.log(fruta);
```
```
melon
27
```

### Basado en objetos y funciones

Javascript permite trabajar con objetos y funciones de forma flexible. Las funciones son ciudadanos de primera clase y se pueden usar funciones como variables así como pasarlas como argumentos. Por ejemplo, en el siguiente bloque de código se define la función `suma`:
```js
// Se define la función suma, que suma dos números.
function suma(num1, num2) {
  console.log(num1 + num2);
}

suma(5,3);
```
```
8
```
Un ejemplo de objeto en Javascript es el siguiente:
```js
const Coche = {
  Marca: 'Honda',
  Modelo: 'Accord',
  Potencia: 240,
};
```

### Multiparadigma

Javascript es un lenguaje de programación multi-paradigma, esto es, permite programar de forma **imperativa**, **funcional** así como **orientada a objetos**.

### Asincronía y eventos
La programación asíncrona es una técnica que permite a un programa iniciar una tarea de larga duración y seguir respondiendo a otros eventos mientras esa tarea es ejecutada, en lugar de tener que esperar hasta que haya finalizado. JavaScript puede ejecutar una tarea mientras espera otras, como cargar datos de un servidor sin bloquear la página. Para ello utiliza `setTimeout`, **promesas** así como `async/await`. En el siguiente bloque de código se muestra un ejemplo:
```js
async function obtenerDatosFinancieros() {
  const res = await fetch('https://api.investing.com');
  const datos = await res.json();
  console.log(datos);
}
```
En este código se define la función `obtenerDatosFinancieros`, que obtiene datos del precio de cotización de una acción a través de la API `https://api.investing.com` (inventada). Mientras este proceso no se complete no se ejecuta la siguiente línea de código, debido a la palabra `await`. Una vez recabados todos los datos, se ejecuta la siguiente línea de código, que utiliza el método `json` sobre la variable `res`, y finalmente se imprimen los datos obtenidos en pantalla.  

### Integración directa con HTML y CSS

JavaScript es el único lenguaje de programación que puede leer y modificar el contenido de una página en tiempo real (DOM). También puede cambiar estilos de CSS desde el código así como escuchar y reaccionar a eventos de los usuarios.

### Masivamente usado y respaldado por una comunidad enorme

Javascript es uno de los lenguajes de programación más populares del planeta. De acuerdo al índice TIOBE el 3.46% de todas las líneas de código escritas en este 2025 corresponden a Javascript y se sitúa en sexta posición. Tiene miles de frameworks y librerías como:
   
   -   **React**, **Vue**, **Angular**, ..., usadas para desarrollo frontend. 
   -   **Express**, **Next.js**, ..., usadas para desarrollo backend y SSR.
   -   **Electron**, **React Native**, ..., usadas para desarrollo de aplicaciones móviles y de escritorio.

Además, si se tiene alguna duda sobre un concepto o sobre cómo implementar una funcionalidad es muy probable que ya haya sido respondida por algún otro desarrollador en foros como Stack Overflow o Reddit.

## 2. ¿Cuáles son algunos tipos de datos JS?

<img src="./images/DataTypes.jpg" alt="Tipos de datos de Javascript" width="1200" height="500">



## 3. ¿Cuáles son las tres funciones de String en JS?

## 4. ¿Qué es un condicional?

## 5. ¿Qué es un operador ternario?

## 6. ¿Cuál es la diferencia entre una declaración de función y una expresión de función?

## 7. ¿Qué es la palabra clave "this" en JS?


