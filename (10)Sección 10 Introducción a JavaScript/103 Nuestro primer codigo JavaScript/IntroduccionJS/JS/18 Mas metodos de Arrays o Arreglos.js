
//Mas metodos de Arrays

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo");

const carrito = [
    {nombre: "Monitor 20 pulgadas" , precio: 500 },
    {nombre: "Televisor 50 pulgadas" , precio: 700 },
    {nombre: "Tablet" , precio: 300 },
    {nombre: "Audifonos" , precio: 200 },
    {nombre: "Teclado" , precio: 50 },
    {nombre: "Celular" , precio: 500 },
    {nombre: "Bocinas" , precio: 300 },
    {nombre: "Laptop" , precio: 800 },
];

//forEach se ejecuta al menos una vez por cada elemento

meses.forEach(function(mes){
     console.log(mes)
});

//forEach como estructura de control

meses.forEach(function(mes){
     if(mes == "Marzo"){
       console.log("Marzo si existe");
     }     
});

//includes mejor utilizarlo en arreglos planos

let resultado = meses.includes("Marzo");
let resultado2 = meses.includes("Diciembre");

console.log(resultado);
console.log(resultado2);

//Para el caso de arreglos de objetos mejor utilizar some

resultado = carrito.some(function(producto){
    return producto.nombre == "CelularPro";
})

console.log(resultado);

//reduce para conocer el total de precio en un carrito

resultado = carrito.reduce(function(total, producto){
         return total + producto.precio
}, 0);

console.log(resultado);

//filter ideal para filtrar 

resultado = carrito.filter(function(producto){
    return producto.precio > 500
})

console.log(resultado);






