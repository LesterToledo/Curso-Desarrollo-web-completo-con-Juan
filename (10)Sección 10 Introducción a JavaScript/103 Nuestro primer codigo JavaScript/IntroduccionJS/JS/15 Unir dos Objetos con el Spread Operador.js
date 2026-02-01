

//Unir dos objetos con el spread operador

const producto = {
  nombreProducto: "Monitor de 20 pulgadas",
  precio: 300,
  Disponible: true,
}

const medidas = {
   peso: "1 kg",
   medida: "1 m",
}

//spread operador(...) une dos objetos dando como resultado uno diferente y
//manteniendo los anteriores
const nuevoProducto = { ...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);

// El Spread Operator (operador de propagación) es, junto con el destructuring, 
// uno de los símbolos más queridos por los desarrolladores modernos de JavaScript. 
// Se representa con tres puntos suspensivos ... y su función es, 
// literalmente, "esparcir" o expandir los elementos de un iterable 
// (como un arreglo o un objeto) dentro de otro.

// Si el destructuring sirve para "desarmar", 
// el spread operator sirve para "distribuir".

// 1. Spread en Arreglos (Arrays)
// Antes, para combinar arreglos, usábamos métodos como .concat(). 
// Con el spread operator, el código es mucho más visual.

// Copiar y Combinar

// const frutas = ["🍎", "🍌"];
// const verduras = ["🥦", "🥕"];

// // Combinar ambos en uno nuevo
// const comida = [...frutas, ...verduras, "🍕"]; 
// // Resultado: ["🍎", "🍌", "🥦", "🥕", "🍕"]

// El concepto de la "Copia Superficial" (Shallow Copy)
// Uno de los usos más importantes es crear copias de seguridad.

// Error común: const copia = original; (Esto no copia, solo crea una referencia. 
// Si cambias uno, cambias el otro).

// Forma correcta: const copia = [...original]; 
// (Aquí creas un arreglo totalmente nuevo con los mismos valores).

// 2. Spread en Objetos
// En los objetos, el spread operator es el rey de la inmutabilidad 
// (un concepto clave en frameworks como React). 
// Te permite crear una versión nueva de un objeto cambiando solo lo que necesitas.

// Clonar y Actualizar

// const pcBase = {
//     ram: "8GB",
//     procesador: "i5",
//     disco: "SSD 256GB"
// };

// // Queremos mejorar la RAM sin tocar el objeto original
// const pcGaming = {
//     ...pcBase,
//     ram: "32GB", // Esto sobrescribe la propiedad anterior
//     grafica: "RTX 4080" // Añadimos una nueva
// };

// Regla de oro: El orden importa. Si pones el spread después de una propiedad, 
// el spread ganará y sobrescribirá tu valor manual. Si lo pones antes, 
// tu valor manual es el que queda.

// 3. Spread como Argumentos de Funciones
// A veces tienes una función que recibe varios parámetros individuales, 
// pero tus datos están dentro de un arreglo. 
// El spread "abre" el arreglo por ti.

// const coordenadas = [10, 50, 100];

// function dibujarPunto(x, y, z) {
//     console.log(`Punto en: ${x}, ${y}, ${z}`);
// }

// // En lugar de: dibujarPunto(coordenadas[0], coordenadas[1], coordenadas[2])
// dibujarPunto(...coordenadas);

// 4. Spread vs. Rest Parameters (El gemelo "opuesto")
// Es muy común confundir el Spread con el Rest. Aunque ambos usan ..., 
// hacen cosas opuestas:


// Característica: Spread Operator (...)
// Función: "Expande" elementos.
// Uso común: Al llamar una función o crear un objeto/array.
// ejemplo: [...otros]


// Característica: Rest Parameters (...)
// Función: "Recoge" elementos en un arreglo.
// Uso común: En la definición de los parámetros de una función.
// ejemplo: function suma(...numeros)

// ¿Por qué es vital aprender esto?
// En el desarrollo profesional actual (especialmente en React, Vue o Angular), 
// casi nunca modificamos los datos originales directamente. 
// Siempre creamos una copia, le hacemos el cambio y enviamos esa copia 
// al estado de la aplicación. El spread operator es la herramienta que nos 
// permite hacer esto en una sola línea de código limpia y legible.

// Advertencia: Al igual que el destructuring, el spread operator solo hace 
// una copia superficial. Si tienes un objeto dentro de otro objeto, 
// la referencia interna se mantendrá igual. Para copias "profundas", 
// necesitarás otras técnicas como structuredClone().