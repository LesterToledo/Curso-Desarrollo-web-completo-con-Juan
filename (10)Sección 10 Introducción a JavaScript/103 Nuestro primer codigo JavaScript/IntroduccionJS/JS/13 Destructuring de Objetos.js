

//Destructuring de Objetos

const producto = {
  nombreProducto: "Monitor de 20 pulgadas",
  precio: 300,
  Disponible: true,
}

//Traer los valores dentro de un objeto y asignarlos a una variable
//Metodo antiguo

// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

//Traer los valores dentro de un objeto y asignarlos a una variable
//Metodo actual
//Destructuring
// const {precio} = producto;
// const {nombreProducto} = producto;

// console.log(precio);
// console.log(nombreProducto);

//Se pueden poner dos variables en la misma linea
const {precio, nombreProducto} = producto; 

console.log(precio);
console.log(nombreProducto);

// El destructuring (o desestructuración) es básicamente un "atajo" que introdujo 
// ES6 para extraer datos de objetos (o arreglos) y guardarlos en variables de una 
// forma mucho más limpia y rápida.

// Imagina que tienes un objeto que representa a un personaje de un videojuego. 
// Antes, para sacar sus datos, tenías que repetir el nombre del objeto una y otra vez. 
// Con el destructuring, vas directo al grano.

// La diferencia visual
// Supongamos que tenemos este objeto:

// const usuario = {
//     nombre: "Alex",
//     id: 45,
//     email: "alex@ejemplo.com"
// };

// La forma antigua (Larga y repetitiva):

// const nombre = usuario.nombre;
// const id = usuario.id;
// const email = usuario.email;

// Con Destructuring (Limpio y elegante):
// const { nombre, id, email } = usuario;

// En una sola línea, JavaScript entiende que quieres crear variables 
// que se llamen exactamente igual que las propiedades del objeto.

// Tres trucos que te harán ver como un pro
// La desestructuración no solo sirve para copiar nombres, tiene superpoderes:

// 1. Cambiar el nombre de la variable
// Si no quieres que la variable se llame igual que la propiedad 
// (tal vez porque ya usaste ese nombre antes), puedes renombrarla usando :.

// const { nombre: nombreCompleto } = usuario;
// console.log(nombreCompleto); // "Alex"

// 2. Valores por defecto
// ¿Qué pasa si intentas extraer algo que no existe? Te daría undefined. 
// Puedes evitarlo asignando un valor por defecto con =.

// const { nivel = 1 } = usuario; 
// Como 'nivel' no existe en el objeto, se crea con el valor 1.

// 3. En los parámetros de una función (Muy común en React)
// En lugar de pasar todo el objeto a una función y escribir objeto.propiedad 
// dentro, puedes desestructurar directamente en los paréntesis:

// function saludar({ nombre, email }) {
//     console.log(`Hola ${nombre}, te enviamos un correo a ${email}`);
// }

// saludar(usuario);

// ¿Por qué deberías usarlo?
// Legibilidad: Tu código se ve menos "ruidoso".

// Mantenimiento: Es más fácil ver qué datos está usando una función o 
// un componente desde la primera línea.

// Productividad: Escribes menos código para hacer lo mismo.

// Ojo: Si el objeto es null o undefined, el destructuring lanzará un error. 
// Siempre asegúrate de que el objeto exista antes de intentar "desarmarlo".

// Solucion



