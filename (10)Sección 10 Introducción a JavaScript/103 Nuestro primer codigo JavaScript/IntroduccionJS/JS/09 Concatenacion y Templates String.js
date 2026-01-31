
//Concatenación y Templates String

const nombre = "Lester";

const correo = "lesterkll79@gmail.com";

console.log(nombre);

console.log(correo);

//Concatenando nombre y correo
console.log(nombre + correo);

//Concatenando nombre y correo con espacio y con el signo de mas
console.log("Nombre Cliente:" + nombre + " Correo:" + correo);

//Concatenando nombre y correo con espacio y con el signo de coma
console.log("Nombre Cliente:", nombre , " Correo:", correo);

//Templates String o String Literals
console.log(`Nombre Cliente: ${nombre} Correo: ${correo}`);

// En JavaScript, unir cadenas de texto es una de las tareas más comunes. 
// Aunque existen dos formas principales de hacerlo, la industria moderna 
// prefiere los Template Strings por su legibilidad. 
// Aquí tienes una guía rápida basada en los estándares de MDN Web Docs 
// sobre Cadenas de Texto

// 1. Concatenación Tradicional (El operador +)
// Es la forma clásica de unir texto y variables. Consiste en usar el símbolo de suma para "pegar" fragmentos. 
// Sintaxis: Se usan comillas simples (' ') o dobles (" ").
// Problema: Se vuelve difícil de leer cuando hay muchas variables o saltos de línea, ya que debes abrir y cerrar comillas constantemente. 
// Ejemplo:
// javascript
// const ciudad = "Santa Cruz";
// const servicio = "mantenimiento";
// console.log("Ofrecemos " + servicio + " de lavadoras en " + ciudad + ".");

// 2. Template Strings (Plantillas de cadena)
// Introducidos en ES6, son la forma moderna y recomendada. Utilizan la comilla invertida o "backtick" (`). 
// Interpolación: Permiten insertar variables directamente usando la sintaxis ${variable}.
// Multilínea: Puedes hacer saltos de línea sin necesidad de caracteres especiales como \n.
// Expresiones: Puedes realizar operaciones matemáticas o lógica simple dentro de los corchetes. 
// Ejemplo:
// javascript
// const equipo = "Lavadora";
// const precio = 150;
// const descuento = 20;

// // Uso de Template String con operación matemática interna
// console.log(`El servicio de ${equipo} cuesta ${precio - descuento} Bs.`);

// Diferencias Clave
// Característica 	Concatenación (+)	Template Strings (`)
// Legibilidad	Baja (muchas comillas)	Alta (flujo natural)
// Multilínea	Requiere \n	Natural (presionando Enter)
// Variables	Requiere cerrar y abrir texto	Se insertan con ${}
// Facilidad	Tedioso en textos largos	Muy sencillo y limpio

// Para profundizar en el manejo de textos, puedes revisar la guía de Literales 
// de Plantilla en JavaScript.info.
