//Strings o cadenas de texto
const producto = "Monitor de 20 pulgadas";
const producto2 = "Mouse";

console.log(producto.length); //obtener el tamaño del string

//Indexof me permite encontrar un elemento en un string, el indice comienza en 0 (retornar la posición)
console.log(producto.indexOf("r"));
console.log(producto.indexOf("w")); //sale -1 xq no encontro la palabra, no existe la cadena o caracter

//Includes (retornar true o false)
console.log(producto.includes("20"));
console.log(producto.includes("21"));

