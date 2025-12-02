//Sistema de e-commerce
const producto = {
    nombreProducto: "Televisor",
    precio: 300,
    disponibilidad: true,
    categoria: "Televisores",
};
//Sistema de bodega
const medidas = {
    peso: "1kg",
    medida: "1m",
    SKU: "9179U1ASD",
};

const nuevoProducto = {...producto, ...medidas};
console.log(nuevoProducto);