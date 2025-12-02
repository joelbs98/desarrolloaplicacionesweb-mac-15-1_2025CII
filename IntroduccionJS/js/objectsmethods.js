"use strict"; //se debe usar buenas practicas de JS, si no se marca un error, se corre JS en modo estricto

const producto = {
    nombreProducto: "Televisor",
    precio: 300,
    disponibilidad: true,
    categoria: "Televisores",
};

const producto2 = {
    nombreProducto: "Televisor",
    precio: 300,
    disponibilidad: true,
    categoria: "Televisores",
};

//los objetos por defecto si se pueden modificar a pesar de que sean const

Object.freeze(producto);//con esto el objeto no puede ser modificado
//Con freeze no se puede agregar ni eliminar propiedades
//Tampoco se puede cambiar valores de propiedades
//producto.disponibilidad = false;
console.log(Object.isFrozen(producto));

Object.seal(producto2);//Con esto el objeto no puede agregar ni eliminar propiedades
//Pero si se puede cambiar valores
producto2.precio = 400;
console.log(producto2.precio);