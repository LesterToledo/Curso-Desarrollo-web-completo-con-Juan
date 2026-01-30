
// El objeto  Math

let resultado;

// Pone el valor de PI
resultado = Math.PI;

// Redondea a 2 si es menor a 2.6
resultado = Math.round(2.3);

// Redondea a 2 si es mayor o igual a 2.6
resultado = Math.round(2.6); 

// Ceil siempre Redondea hacia arriba
resultado = Math.ceil(2.6); 
resultado = Math.ceil(2.1); 

// Floor siempre Redondea hacia abajo
resultado = Math.floor(2.6); 
resultado = Math.floor(2.1); 

//Calcula el valor de raiz cuadrada
resultado = Math.sqrt(144);

//Calcula el valor absoluto y un valor negativo lo convierte en positivo
resultado = Math.abs(-200);

//Determina el valor minimo de una serie de numeros
resultado = Math.min(10, 3, 2, 20, 1);

//Determina el valor maximo de una serie de numeros
resultado = Math.max(10, 3, 2, 20, 1);

//Muestra en consola un numero aleatorio
resultado = Math.random();

//El ejemplo anterior nunca pasa de 1, por lo que se puede utilizar 
//otros recursos para que el numero aleatorio sea mas grande

//Muestra en consola un numero aleatorio mayor a 1
resultado = Math.floor(Math.random() * 30);

//Muestra en consola un numero aleatorio mayor a 1
resultado = Math.ceil(Math.random() * 30);

console.log(resultado);

// El objeto Math en JavaScript es un objeto estático (no necesita un constructor) 
// que contiene propiedades y métodos para realizar tareas matemáticas complejas. 
// Aquí tienes todas las posibilidades principales clasificadas según su función:

// 1. Constantes (Propiedades Estáticas)
// Valores numéricos fijos que puedes invocar directamente: 
// Math.PI: Relación entre la circunferencia y el diámetro (aprox. 3.14159).
// Math.E: Constante de Euler y base de logaritmos naturales (aprox. 2.718).
// Math.LN10 / Math.LN2: Logaritmo natural de 10 y de 2.
// Math.LOG10E / Math.LOG2E: Logaritmo de E en base 10 y base 2.
// Math.SQRT1_2 / Math.SQRT2: Raíz cuadrada de 1/2 (aprox. 0.707) y de 2 (aprox. 1.414). 

// 2. Métodos de Redondeo y Truncado
// Herramientas para manejar decimales: 
// Math.round(x): Redondea al entero más cercano (.5 hacia arriba).
// Math.ceil(x): Redondea hacia arriba al entero más próximo (techo).
// Math.floor(x): Redondea hacia abajo al entero más próximo (suelo).
// Math.trunc(x): Elimina la parte decimal (disponible desde ES6). 

// 3. Funciones de Valor y Selección
// Math.abs(x): Devuelve el valor absoluto de un número.
// Math.max(a, b, ...): Devuelve el número con el valor más alto.
// Math.min(a, b, ...): Devuelve el número con el valor más bajo.
// Math.random(): Genera un número aleatorio decimal entre 0 (inclusive) y 1 (excluyente).
// Math.sign(x): Indica si el número es positivo, negativo o cero.

// 4. Potencias y Raíces
// Math.pow(base, exp): Eleva la base al exponente indicado.
// Math.sqrt(x): Calcula la raíz cuadrada.
// Math.cbrt(x): Calcula la raíz cúbica.
// Math.hypot(a, b, ...): Devuelve la raíz cuadrada de la suma de los cuadrados de sus argumentos (hipotenusa). 

// 5. Trigonometría
// Los ángulos deben estar en radianes: 
// Básicas: Math.sin(x), Math.cos(x), Math.tan(x).
// Inversas: Math.asin(x), Math.acos(x), Math.atan(x), Math.atan2(y, x).
// Hiperbólicas: Math.sinh(x), Math.cosh(x), Math.tanh(x). 

// 6. Logaritmos y Exponenciales
// Math.log(x): Logaritmo natural (base E).
// Math.log10(x) / Math.log2(x): Logaritmo en base 10 y base 2.
// Math.exp(x): Devuelve \(e^{x}\). 

// Puedes consultar la lista completa 
// y detallada en la Referencia de Math en MDN Web Docs.