
//Orden de las Operaciones

let resultado;

resultado = (20 + 30 ) * 2;

resultado = (600 + 600 ) * 1.05;

console.log(resultado);

//Incrementos

let puntaje = 10;

puntaje++;  // Muestra el valor y luego lo incrementa

++puntaje; // incrementa el valor y luego lo muestra

//Decrementos

puntaje--; // muestra el valor y luego decrementa

--puntaje;  // decrementa y luego muestra el valor

// Sumar un valor diferente a 1 y asignarlo a la variable
puntaje += 10;

// Resta un valor diferente a 1 y asignarlo a la variable
puntaje -= 10;

console.log(puntaje);


// En programación, el orden en que se ejecutan las operaciones no es aleatorio; sigue reglas estrictas de jerarquía similares a las matemáticas, pero adaptadas a la lógica computacional.
// El Orden de las Operaciones (Precedencia)
// La precedencia de operadores determina qué operación se evalúa primero en una expresión compleja. Si dos operadores tienen la misma prioridad, se aplica la asociatividad (generalmente de izquierda a derecha). 
// El orden general en la mayoría de lenguajes como JavaScript es: 
// Paréntesis (): Tienen la prioridad máxima; todo lo que esté dentro se resuelve primero.
// Incremento/Decremento ++, --: Se ejecutan antes que las operaciones matemáticas básicas.
// Exponenciación **: Se evalúa de derecha a izquierda.
// Multiplicación *, División / y Módulo %: Tienen mayor prioridad que la suma.
// Suma + y Resta -: Se evalúan al final del bloque aritmético.
// Asignación =: Es uno de los últimos en ejecutarse, pues primero se debe calcular el valor de la derecha. 
// Operadores de Incremento (++) y Decremento (--) 
// Estos operadores aumentan o disminuyen el valor de una variable exactamente en 1. Su comportamiento cambia drásticamente según su posición: 
// 1. Post-fijo (x++ / x--)
// El valor actual de la variable se usa en la expresión primero, y el incremento ocurre después. 
// Ejemplo: Si x = 5, al hacer y = x++, la variable y valdrá 5, pero x pasará a ser 6 tras la asignación. 
// 2. Pre-fijo (++x / --x)
// La variable se incrementa primero, y el nuevo valor es el que se utiliza en la expresión. 
// Ejemplo: Si x = 5, al hacer y = ++x, tanto y como x valdrán 6. 
// Uso común: Son fundamentales en bucles (for, while) para controlar el número de iteraciones y actualizar contadores de forma eficiente. 
// Para una referencia técnica completa, puedes consultar la Tabla de Precedencia en MDN Web Docs.
