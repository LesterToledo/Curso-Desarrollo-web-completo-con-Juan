
//Array o Arreglos

numeros = [10, 20, 30, 40, 50];

console.log(numeros);

console.table(numeros);

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo");

console.log(meses);
console.table(meses);

//Acceder a los valores de un arreglo

console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);
console.log(numeros[5]);

//Conocer la extensión de una arreglo
console.log(meses.length);

//Para no tener que escribir todos los elementos de una arreglo se utiliza el
//for each

numeros.forEach(numero => {
    console.log(numero)
});

//Un arreglo en javascript puede convinar varios valores
const arreglo = ["Hola", 10, true, "si", null, {nombre: "juan", trabajo: "programador"}, [1, 2, 3]];

console.log(arreglo);

// Si los objetos son el "quién" en JavaScript, los arreglos (arrays) 
// son el "dónde". Son listas ordenadas de datos que nos permiten agrupar 
// información de forma secuencial.

// Aquí tienes el manual definitivo para entenderlos, 
// desde lo básico hasta las herramientas de "élite" 
// que usarás todos los días.

// 1. Anatomía y Creación
// Un arreglo es una lista encerrada en corchetes []. 
// A diferencia de otros lenguajes, en JS los arreglos pueden mezclar 
// tipos de datos (números, strings, objetos, e incluso otros arreglos), 
// aunque lo ideal es que sean homogéneos.

// const apps = ["WhatsApp", "Instagram", "TikTok"];
// console.log(apps[0]); // "WhatsApp" (El índice siempre empieza en 0)
// console.log(apps.length); // 3 (Cantidad de elementos)

// 2. Métodos de "Cirugía" (Modifican el original)
// Estos métodos alteran el arreglo sobre el cual estás trabajando. 
// Úsalos con cuidado, especialmente en aplicaciones grandes donde 
// quieres evitar efectos secundarios.

// push() / pop(): Añade o quita un elemento al final.

// unshift() / shift(): Añade o quita un elemento al inicio.

// splice(): El "multiusos". Puede eliminar, reemplazar o añadir 
// elementos en cualquier posición.

// 3. Los "Tres Mosqueteros" (Inmutables y Funcionales)
// En el desarrollo moderno (React, Node.js), preferimos métodos que no 
// modifican el original, sino que devuelven un nuevo arreglo procesado. 
// Estos son los más importantes:

// El Gran Trio: Map, Filter y Reduce

// Método
// map()

// Propósito
// Transformar cada elemento.

// Resultado
// Un nuevo arreglo del mismo tamaño.

// Método
// filter()

// Propósito
// Filtrar elementos bajo una condición.

// Resultado
// Un nuevo arreglo (igual o más pequeño).

// Método
// reduce()

// Propósito
// Acumular todo en un solo valor.

// Resultado
// Un solo valor (número, string, objeto).

// Ejemplo rápido:

// const precios = [10, 20, 30, 40];

// const conIVA = precios.map(p => p * 1.21); // [12.1, 24.2, ...]
// const caros = precios.filter(p => p > 25); // [30, 40]
// const total = precios.reduce((acc, p) => acc + p, 0); // 100

// 4. Métodos de Búsqueda
// ¿Necesitas saber si algo está ahí o en qué posición?

// includes(valor): Devuelve true o false. Ideal para condiciones simples.

// find(callback): Devuelve el primer elemento que cumpla una condición.

// findIndex(callback): Igual que el anterior, pero te da la posición (el índice).

// some() / every(): Comprueban si alguno o todos los elementos cumplen una regla.

// 5. El toque moderno: Destructuring y Spread
// Como vimos antes, estas herramientas también funcionan con arreglos, 
// pero se basan en la posición:

// const colores = ["Rojo", "Verde", "Azul"];

// // Destructuring (por posición)
// const [primero, segundo] = colores; 

// // Spread (para copiar o combinar)
// const masColores = [...colores, "Amarillo"];

// 6. ¿Mutar o no mutar? Esa es la cuestión
// Una de las mayores fuentes de errores en JavaScript es cambiar 
// un arreglo original sin querer.

// Regla de oro: Siempre que puedas, usa métodos que devuelvan una copia 
// (map, filter, slice, spread) en lugar de los que modifican el original 
// (push, splice, sort). Esto hace que tu código sea predecible y 
// fácil de depurar.

// Un truco extra: structuredClone()
// Si tienes un arreglo de objetos muy complejo y necesitas una copia real 
// (que no comparta referencias), usa const copiaPro = structuredClone(original);. 
// Es la forma nativa y moderna de hacer copias profundas.

