
// Numeros y operadores

//En javascript todos los numeros son iguales
//salen de color azul en la consola

const numero1 = 100;
const numero2 = 200;
const numero3 = 200.20;
const numero4 = .1020;
const numero5 = -5;

console.log(numero1);
console.log(numero2);


//Operador Suma, suma dos numeros
console.log(numero1+numero2);

//Operador Multiplicacion, Multiplica dos numeros
console.log(numero1*numero2);

//Operador Division, Divide dos numeros
console.log(numero2/numero1);

//Operador Resta, Resta dos numeros
console.log(numero2-numero1);

//Operador Modulo, En una division muestra el residuo de la Division
console.log(numero2%numero1);


// En JavaScript, existen varios grupos de operadores para trabajar con números, 
// desde operaciones matemáticas básicas hasta manipulaciones a nivel de bits. 
// Aquí tienes la lista completa según la documentación de MDN Web Docs:

// 1. Operadores Aritméticos 
// Se usan para realizar cálculos matemáticos estándar y devuelven un valor numérico: 
// Suma (+): Suma dos números (ej. 5 + 2 = 7).
// Resta (-): Resta el operando derecho del izquierdo (ej. 5 - 2 = 3).
// Multiplicación (*): Multiplica dos números (ej. 5 * 2 = 10).
// División (/): Divide el operando izquierdo por el derecho (ej. 10 / 2 = 5).
// Módulo (%): Devuelve el resto de una división (ej. 5 % 2 = 1).
// Exponenciación (**): Eleva el primer número a la potencia del segundo (ej. 5 ** 2 = 25).
// Incremento (++): Suma 1 al valor de la variable.
// Decremento (--): Resta 1 al valor de la variable.
// Negación Unaria (-): Convierte un número en su opuesto negativo.
// Suma Unaria (+): Intenta convertir el operando en un número si no lo es. 

// 2. Operadores de Asignación Compuesta
// Permiten realizar una operación aritmética y asignar el resultado a la misma variable en un solo paso: 
// Asignación simple (=): x = y
// Asignación de suma (+=): x = x + y
// Asignación de resta (-=): x = x - y
// Asignación de multiplicación (*=): x = x * y
// Asignación de división (/=): x = x / y
// Asignación de residuo (%=): x = x % y
// Asignación de exponenciación (**=): x = x ** y 

// 3. Operadores de Comparación
// Comparan dos valores numéricos y devuelven un valor booleano (true o false): 
// Igualdad (==): Verifica si los valores son iguales (realiza conversión de tipo).
// Igualdad estricta (===): Verifica si los valores y los tipos son idénticos.
// Desigualdad (!=): Verifica si los valores no son iguales.
// Desigualdad estricta (!==): Verifica si los valores o tipos no son idénticos.
// Mayor que (>): true si el izquierdo es mayor.
// Menor que (<): true si el izquierdo es menor.
// Mayor o igual que (>=): true si es mayor o igual.
// Menor o igual que (<=): true si es menor o igual. 

// 4. Operadores de Bits (Bitwise)
// Tratan a sus operandos como un conjunto de 32 bits (ceros y unos) en lugar de números decimales: 
// AND (&): Devuelve un 1 en cada posición de bit donde ambos operandos tengan un 1.
// OR (|): Devuelve un 1 si alguno de los operandos tiene un 1.
// XOR (^): Devuelve un 1 si solo uno de los operandos tiene un 1.
// NOT (~): Invierte los bits del operando.
// Desplazamiento a la izquierda (<<): Desplaza bits a la izquierda.
// Desplazamiento a la derecha (>>): Desplaza bits a la derecha manteniendo el signo.
// Desplazamiento a la derecha sin signo (>>>): Desplaza bits a la derecha llenando con ceros. 