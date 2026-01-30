
// Metodos de los String

const producto = "Monitor de 20 pulgadas";
const producto2 = "Monitor HD";

// Metodo length para saber la longitud de un string
console.log(producto.length);
console.log(producto2);

//indexOf 
//devuelve posicion
// Para saber si una palabra se encuentra en un texto se utiliza indexOf 
// si el valor es mayor a cero existe si es -1 no existe
console.log(producto.indexOf("pulgadas"));


// Para saber si una palabra se encuentra en un texto se utiliza indexOf 
// si el valor es mayor a cero existe si es -1 no existe
console.log(producto2.indexOf("pulgadas"));

//includes
//devuelve true o false
// Para saber si una palabra se encuentra en un texto se utiliza includes
// si el valor es true existe, si es false no existe
console.log(producto2.includes("pulgadas"));
console.log(producto.includes("pulgadas"));

// Los métodos de String en JavaScript son funciones integradas para manipular, 
// buscar y transformar cadenas de texto, sin modificar la cadena original. 
// Los más utilizados incluyen .toUpperCase(), .toLowerCase(), .slice(), 
// .substring(), .replace(), .split(), y .trim(). Estos métodos permiten 
// transformar, extraer partes, o validar 
// contenidos fácilmente. 


// Aquí está la lista desglosada de los principales métodos de strings en JavaScript:
// 1. Extracción de Subcadenas
// slice(inicio, fin): Extrae una sección y devuelve una nueva cadena.
// substring(inicio, fin): Similar a slice, pero no acepta índices negativos.
// substr(inicio, longitud): Extrae caracteres desde una posición inicial basándose en la longitud (obsoleto, usar slice preferiblemente).
// charAt(indice): Devuelve el carácter en la posición especificada.
// at(indice): Similar a charAt, pero permite índices negativos (acceso desde el final). 


// 2. Búsqueda y Verificación
// indexOf(valor): Devuelve el índice de la primera aparición de un valor.
// lastIndexOf(valor): Devuelve el índice de la última aparición.
// includes(valor): Determina si una cadena contiene otra (devuelve booleano).
// startsWith(valor): Verifica si la cadena comienza con un valor.
// endsWith(valor): Verifica si la cadena termina con un valor.
// search(expresionReg): Busca una coincidencia mediante expresión regular.
// match(expresionReg): Devuelve las coincidencias encontradas. 


// 3. Transformación y Modificación
// toUpperCase(): Convierte la cadena a mayúsculas.
// toLowerCase(): Convierte la cadena a minúsculas.
// trim(): Elimina espacios en blanco de ambos extremos.
// trimStart() / trimEnd(): Elimina espacios al inicio o final.
// replace(buscador, nuevoValor): Reemplaza la primera coincidencia.
// replaceAll(buscador, nuevoValor): Reemplaza todas las coincidencias.
// concat(str1, ...): Une dos o más cadenas.
// padStart(longitud, relleno) / padEnd(): Rellena la cadena hasta una longitud dada. 


// 4. Conversión y Manipulación
// split(separador): Divide la cadena en un array de subcadenas.
// repeat(veces): Repite la cadena un número específico de veces.
// toString(): Devuelve el valor primitivo de un objeto String. 


// 5. Métodos HTML (Especiales)
// link(url): Crea un enlace (<a>).
// bold(), italics(), small(), strike(): Envuelve el texto en etiquetas HTML. 


// Nota: Todos estos métodos devuelven un nuevo string o un nuevo valor, 
// ya que los strings en JavaScript son inmutables. 