
//Modificar Objetos

const producto = {
  nombreProducto: "Monitor de 20 pulgadas",
  precio: 300,
  Disponible: true,
}

//Agregar nuevas Propiedades
producto.imagen = "imagen.jpg";

//Elinimiar alguna propiedad
delete producto.Disponible;



console.log(producto);

// console.log(producto);

// //Para acceder al objeto se pueden utilizar dos sintaxis

// //se utiliza la sintaxis de punto

// console.log(producto.precio);
// console.log(producto.nombreProducto);
// console.log(producto.Disponible);

// //se utiliza la sintaxis de corchete
// console.log(producto["precio"]);

//Geminis

// Los objetos son la piedra angular de JavaScript. A diferencia de los tipos 
// primitivos (números, strings), un objeto es una colección de propiedades 
// (clave y valor) que permiten modelar datos del mundo real. 
// Aquí tienes todo lo esencial para dominarlos, 
// basado en la documentación de MDN Web Docs: Objetos. 

// 1. Creación de Objetos
// La forma más común es el Objeto Literal:

// const lavadora = {
//     marca: "Samsung",
//     carga: "Frontal",
//     capacidad: 12,
//     estaFuncionando: true
// };

// 2. Acceso a Propiedades
// Existen dos formas de leer o modificar la información: 
// Notación de punto (.): Es la más usada. lavadora.marca (Devuelve "Samsung").
// Notación de corchetes ([]): Útil si el nombre de la propiedad está en una 
// variable o tiene espacios. lavadora["capacidad"]. 

// 3. Métodos (Funciones dentro de objetos)
// Un objeto no solo guarda datos, también puede realizar acciones:

// const tecnico = {
//     nombre: "Juan",
//     saludar: function() {
//         return `Hola, soy ${this.nombre}, tu técnico en Santa Cruz.`;
//     }
// };
// console.log(tecnico.saludar());

// Nota: this hace referencia al objeto mismo.

// 4. Manipulación Dinámica
// A diferencia de otros lenguajes, en JS puedes añadir o eliminar propiedades en 
// tiempo de ejecución: 
// Agregar: lavadora.color = "Blanco";
// Eliminar: delete lavadora.estaFuncionando;

// 5. Métodos útiles de Object (Estáticos)
// Para trabajar con objetos de forma avanzada, 
// usa el constructor global Object en JavaScript.info:
// Object.keys(obj): Devuelve un array con todos los nombres de las 
// propiedades (claves).
// Object.values(obj): Devuelve un array con todos los valores.
// Object.entries(obj): Devuelve un array de pares [clave, valor].
// Object.assign(destino, origen): Copia propiedades de un objeto a otro.
// Object.freeze(obj): Congela el objeto para que no se pueda modificar nada.

// 6. Objetos por Referencia
// Regla de oro: Los objetos no se copian, se referencian.
// Si haces const b = a, y cambias algo en b, también cambiará en a, 
// porque ambos apuntan al mismo lugar en la memoria. 

// 7. Desestructuración (Destructuring)
// Una forma moderna y rápida de extraer valores:

// const { marca, capacidad } = lavadora;
// console.log(marca); // "Samsung"