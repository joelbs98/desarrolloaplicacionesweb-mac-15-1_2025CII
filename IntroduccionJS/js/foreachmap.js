const carrito = [
  { nombre: "Monitor", precio: 300 },
  { nombre: "Teclado", precio: 60 },
  { nombre: "Celular", precio: 200 },
];

//forEach -> se utiliza solamente en arreglos
carrito.forEach(function (producto) {
  console.log(producto.nombre);
});

//forEach en arrow function
carrito.forEach((producto) => console.log(producto.nombre));

//Map
const arreglo = carrito.map((producto) => producto.nombre);
console.log(arreglo);
