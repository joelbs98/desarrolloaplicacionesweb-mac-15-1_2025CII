//Objetos

const nombreProducto = "Televisor";
const precio = 300;
const disponibilidad = true;

//sintaxis del objeto en JS
const producto = {
    nombreProducto: "Televisor",
    precio: 300,
    disponibilidad: true,
    categoria: "Televisores",
};

console.log(producto);
console.log(producto.precio); //acceder a la propiedad del objeto(forma comun)
console.log(producto["precio"]); //otra forma de acceder al objeto

producto.imagen = "imagen.jpg"; //añadir una propiedad al objeto
delete producto.categoria; //eliminar propiedad de un objeto
producto.precio = 450; //modificar una propiedad existente

console.log(producto);