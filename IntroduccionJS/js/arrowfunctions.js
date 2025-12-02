//Arrow Functions

//Se utilizan en la forma de expresión de función
const sumar = (n1, n2) => {
  console.log(n1 + n2);
};
sumar(5, 10);

//en caso de que solo sea una linea el cuerpo de la funcion son opcionales {}
const sumar2 = (n1, n2) => console.log(n1 + n2);

//ejemplo2
const aprendiendo = (tecnologia) => {
  console.log(`Aprendiendo ${tecnologia}`);
};
aprendiendo("Javascript");

//cuando hay solo 1 parametro de entrada los () no son necesario
const saludo = (mensaje) => console.log(mensaje);

//Arreglo plano
const meses = new Array("Enero", "Febrero", "Marzo");

//arreglo de objetos
const carrito = [
  { nombre: "Monitor", precio: 300 },
  { nombre: "Teclado", precio: 60 },
  { nombre: "Celular", precio: 200 },
];

//forEach para recorrer
meses.forEach((mes) => {
  console.log(mes);
});

//forEach para buscar elemento
meses.forEach((mes) => {
  if (mes == "Febrero") {
    console.log("Si existe febrero");
  }
});

//includes para buscar en arreglos planos
let resultado = meses.includes("Marzo");
console.log(resultado);

//Some -> ideal para buscar en arreglos de objetos
//arrow function -> no es necesario el return
resultado = carrito.some((producto) => producto.nombre == "Celular");
console.log(resultado);

//Reduce para sumar todos los valores
resultado = carrito.reduce((total, producto) => total + producto.precio, 0); //valor inicial
console.log(resultado);

//Filter es para filtrar un arreglo
resultado = carrito.filter((producto) => producto.precio > 100);
console.log(resultado);

resultado = carrito.filter((producto) => producto.nombre != "Celular");
console.log(resultado);
