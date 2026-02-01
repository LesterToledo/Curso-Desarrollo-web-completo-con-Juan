

//Metodos de Objetos

// "use strict"; //Corre a javascript en modo estricto.

const producto = {
  nombreProducto: "Monitor de 20 pulgadas",
  precio: 300,
  Disponible: true,
}

// Object.freeze(producto); //Congela la actividad sobre el producto.
// no permite agregar ni eliminar propiedades, ni modificarlos


Object.seal(producto); //Congela la actividad sobre el producto.
//no permite adicional ni eliminar propiedades, pero si permite modificar.

producto.imagen = "imagen.jpg"// No se ingresa la imagen pq en el codigo anterior
                              //defino que no se le pueda hacer nada al objeto.

// console.log(Object.isFrozen(producto));
console.log(Object.isSealed(producto));

console.log(producto);

// En JavaScript, los objetos son mucho más que simples contenedores de datos. 
// Si las propiedades son los adjetivos (nombre, color, edad), los métodos 
// son los verbos: las acciones que el objeto puede realizar.

// Aquí tienes una guía completa para dominar los métodos, desde cómo crearlos 
// hasta cómo usar las herramientas "maestras" que JavaScript ya trae incorporadas.

// 1. ¿Qué es exactamente un método?
// Un método es simplemente una función que vive dentro de un objeto. Se define como una propiedad más, pero en lugar de un valor estático, contiene lógica ejecutable.

// Definición clásica vs. moderna (Shorthand)
// Antes de ES6, escribir métodos era un poco más tedioso. Hoy es mucho más limpio:

// const smartphone = {
//     marca: "Xiaomi",
//     modelo: "Note 10 Pro",
//     // Forma antigua (ES5)
//     encender: function() {
//         console.log("Iniciando MIUI...");
//     },
//     // Forma moderna (ES6 Shorthand) - ¡Usa esta!
//     tomarFoto() {
//         console.log("Foto capturada con 108MP");
//     }
// };

// smartphone.tomarFoto(); // "Foto capturada con 108MP"

// 2. El poder del this
// Para que un método sea útil, normalmente necesita interactuar con el resto 
// de la información del objeto. Para eso usamos la palabra clave this, 
// que hace referencia al objeto que está ejecutando el método.

// const usuario = {
//     nombre: "Juan",
//     saludar() {
//         console.log(`Hola, mi nombre es ${this.nombre}`);
//     }
// };

// Nota de experto: Ten cuidado con las Arrow Functions (=>) dentro de los objetos. 
// Las arrow functions no tienen su propio this, por lo que si intentas usarlas como 
// métodos, this.nombre será undefined. Para métodos, usa siempre funciones normales.

// 3. Métodos Estáticos de Object
// JavaScript nos da un "cuchillo suizo" llamado Object (con O mayúscula) que 
// contiene métodos estáticos muy poderosos para manipular cualquier objeto. 
// Estos son los más importantes:

// Para extraer información
// Si necesitas convertir tu objeto en algo que puedas recorrer 
// fácilmente (como un arreglo), usa estos:

// Método
// Object.keys(obj)

// Qué hace
// Devuelve los nombres de las propiedades.

// Resultado
// ['nombre', 'id', 'email']


// Método
// Object.values(obj)

// Qué hace
// Devuelve los valores de las propiedades.

// Resultado
// ['Alex', 45, 'alex@ex.com']


// Método
// Object.entries(obj)

// Qué hace
// Devuelve pares [clave, valor].

// Resultado
// [['nombre', 'Alex'], ...]

// Para proteger tus datos
// A veces quieres que un objeto sea "sagrado" y nadie pueda cambiarlo:

// Object.freeze(obj): Congela el objeto. Nadie puede cambiar, 
// borrar o añadir propiedades. Es definitivo.

// Object.seal(obj): Sella el objeto. Puedes cambiar los valores 
// de las propiedades existentes, pero no puedes añadir ni borrar ninguna.

// 4. Clonar y combinar: Object.assign y el Spread Operator
// Si quieres copiar un objeto sin afectar al original, tienes dos caminos:

// Object.assign(destino, origen): Copia las propiedades de uno a otro.

// Spread Operator (...): Es la forma moderna y preferida.

// const configuracionBase = { brillo: 80, volumen: 50 };
// const configuracionUsuario = { ...configuracionBase, volumen: 100 };

// Resultado: { brillo: 80, volumen: 100 }

// Resumen rápido
// Un método es una función dentro de un objeto.

// Usa this para acceder a otras propiedades del mismo objeto.

// Usa Object.keys() o Object.values() cuando necesites iterar sobre un objeto.

// Usa Object.freeze() si quieres evitar bugs por cambios accidentales en tus datos.