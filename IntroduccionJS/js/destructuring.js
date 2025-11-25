const producto = {
    nombreProducto: "Televisor",
    precio: 300,
    disponibilidad: true,
    categoria: "Televisores",
};

//Forma anterior
const precioProducto = producto.precio;
console.log(precioProducto);

//Forma nueva -> destructuring
const {nombreProducto,precio,disponibilidad,categoria} = producto;
//debe tener el mismo nombre que la propiedad
console.log(precio);
console.log(categoria);

