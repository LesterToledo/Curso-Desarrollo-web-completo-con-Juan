
//Booleans o Boleanos

//El valor de los Boleanos es true o false que significa verdadero o falso
//amigos o no(facebook), encendido o apagado y otros
const Booleano1 = true;
const Booleano2 = false;


//aunque diga true no es un booleano porque tiene comilla, es un string
const Booleano3 = "true";

//Muestra en pantalla el valor de la variable
console.log(Booleano1);
console.log(Booleano2);
console.log(Booleano3);

//Muestra en pantalla el tipo de dato de la variable.
console.log(typeof Booleano1);
console.log(typeof Booleano2);
console.log(typeof Booleano3);

//Booleano con constructor, siempre que tiene new es un constructor
const  Booleano4 = new Boolean(true);
console.log(Booleano4);
console.log(typeof Booleano4);

// Los booleanos en JavaScript representan valores lógicos (true o false), 
// fundamentales para la toma de decisiones y la lógica de control. 
// Estos tipos de datos se utilizan en estructuras condicionales (if), 
// operadores lógicos (&&, ||, !) y el operador ternario, 
// además de reconocerse valores "truthy" o "falsy" en contextos de evaluación. 
// Para una guía técnica detallada sobre booleanos y ejemplos prácticos de uso, 
// se recomienda consultar la documentación de MDN Web Docs.

// Los valores booleanos pueden ser uno de dos valores: verdadero o falso, 
// que representan el valor de verdad de una proposición lógica.

// Los valores booleanos suelen generarse mediante operadores relacionales, 
// operadores de igualdad y NOT lógicos (!). También pueden generarse mediante 
// funciones que representan condiciones, como Array.isArray(). Tenga en cuenta 
// que los operadores lógicos binarios como && y || devuelven los valores de los 
// operandos, que pueden ser booleanos o no.

// Boolean values are typically used in conditional testing, 
// such as the condition for if...else and while statements, 
// the conditional operator (? :), or the predicate return 
// value of Array.prototype.filter().

// Rara vez necesitarás convertir algo explícitamente a un valor booleano, 
// ya que JavaScript lo hace automáticamente en contextos booleanos. 
// Por lo tanto, puedes usar cualquier valor como si fuera booleano, 
// según su veracidad.
// También te recomendamos usar if (condición) e if (!condición) 
// en lugar de if (condición === verdadero) o 
// if (condición === falso) en tu código para aprovechar esta convención. 
// Sin embargo, asegurarte de que los valores que representan condiciones sean 
// siempre booleanos puede ayudar a aclarar la intención de tu código.

// Do this:
// This always returns a boolean value
// const isObject = (obj) => !!obj && typeof obj === "object";

// Or this:
// const isObject = (obj) => Boolean(obj) && typeof obj === "object";

// Or this:
// const isObject = (obj) => obj !== null && typeof obj === "object";

// Instead of this:
// This may return falsy values that are not equal to false
// const isObject = (obj) => obj && typeof obj === "object";

//Booleans primitives y Booleans objetos

// Para convertir valores no booleanos a booleanos, utilice Boolean como función 
// o el operador doble NOT. No utilice el constructor Boolean() con new.

// const good = Boolean(expression);
// const good2 = !!expression;

//No usar

// const bad = new Boolean(expression); // don't use this!

// Esto se debe a que todos los objetos, incluido un objeto booleano cuyo valor 
// encapsulado es falso, son verdaderos y se evalúan como verdaderos en casos 
// como las sentencias condicionales. (Véase también la sección sobre coerción 
// booleana más adelante).

// if (new Boolean(true)) {
//   console.log("This log is printed.");
// }

// if (new Boolean(false)) {
//   console.log("This log is ALSO printed.");
// }

// const myFalse = new Boolean(false); // myFalse is a Boolean object (not the primitive value false)
// const g = Boolean(myFalse); // g is true
// const myString = new String("Hello"); // myString is a String object
// const s = Boolean(myString); // s is true

// Advertencia: rara vez deberías usar Boolean como constructor.

// coerción booleana

// Muchas operaciones integradas que requieren valores booleanos primero convierten 
// sus argumentos en booleanos. La operación se puede resumir de la siguiente manera:

// Booleans are returned as-is.
// undefined turns into false.
// null turns into false.
// 0, -0, and NaN turn into false; other numbers turn into true.
// 0n turns into false; other BigInts turn into true.
// The empty string "" turns into false; other strings turn into true.
// Symbols turn into true.
// All objects become true.

// Nota: Un comportamiento heredado hace que document.all devuelva falso cuando se usa 
// como booleano, a pesar de ser un objeto. Esta propiedad es heredada y no estándar, 
// por lo que no debe usarse.

// Nota: a diferencia de otras conversiones de tipos, como la coerción de cadenas 
// o la coerción de números, la coerción booleana no intenta convertir objetos en 
// primitivos llamando a métodos de usuario.

// En otras palabras, solo unos pocos valores se convierten en falsos; estos se 
// denominan valores falsos. Todos los demás valores se denominan valores 
// verdaderos. La veracidad de un valor es importante cuando se utiliza con 
// operadores lógicos, sentencias condicionales o cualquier contexto booleano.

// Hay dos formas de lograr el mismo efecto en JavaScript.

// Double NOT: !!x niega x dos veces, lo que convierte x en un booleano utilizando 
// el mismo algoritmo que el anterior.
// La función Boolean(): Boolean(x) utiliza el mismo algoritmo que el anterior 
// para convertir x.
// Tenga en cuenta que la veracidad no es lo mismo que ser prácticamente igual 
// a verdadero o falso.

// if ([]) {
//   console.log("[] is truthy");
// }
// if ([] == false) {
//   console.log("[] == false");
// }
// [] is truthy
// [] == false

// [] es verdadero, pero también es prácticamente igual a falso. 
// Es verdadero porque todos los objetos lo son. Sin embargo, 
// al comparar con falso, que es un primitivo, [] también se convierte a un primitivo, 
// que es "" mediante Array.prototype.toString(). Al comparar cadenas y booleanos, 
// ambos se convierten en números y ambos se convierten en 0, 
// por lo que [] == falso es verdadero. En general, la falsedad y == falso difieren 
// en los siguientes casos:

// NaN, undefined y null son falsos, pero no necesariamente falsos.
// "0" (y otras cadenas literales que no son "" pero se convierten a 0) son verdaderas, 
// pero posiblemente falsos.
// Los objetos siempre son verdaderos, pero su representación primitiva puede ser 
// prácticamente falsa.

// Es aún más improbable que los valores veraces sean prácticamente 
// iguales a verdaderos. Todos los valores son veraces o falsos, 
// pero la mayoría no son prácticamente iguales ni a verdaderos ni a falsos.

// Constructor
// Boolean()
// Crea objetos booleanos. Cuando se llama como función, devuelve valores primitivos 
// de tipo booleano.

// Propiedades de instancia
// Estas propiedades se definen en Boolean.prototype y son compartidas por todas 
// las instancias booleanas.

// Boolean.prototype.constructor
// La función constructora que creó el objeto de instancia. Para las instancias 
// booleanas, el valor inicial es el constructor booleano.

// Métodos de instancia
// Boolean.prototype.toString()
// Devuelve una cadena con valor verdadero o falso según el valor del objeto. 
// Anula el método Object.prototype.toString().

// Boolean.prototype.valueOf()
// Devuelve el valor primitivo del objeto booleano. 
// Anula el método Object.prototype.valueOf().

// Ejemplos
// Creación de valores falsos

// const bNoParam = Boolean();
// const bZero = Boolean(0);
// const bNull = Boolean(null);
// const bEmptyString = Boolean("");
// const bfalse = Boolean(false);

// Creando valores verdaderos

// const btrue = Boolean(true);
// const btrueString = Boolean("true");
// const bfalseString = Boolean("false");
// const bSuLin = Boolean("Su Lin");
// const bArrayProto = Boolean([]);
// const bObjProto = Boolean({});