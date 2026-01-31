
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