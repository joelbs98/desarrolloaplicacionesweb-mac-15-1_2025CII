//Arreglo plano
const meses = new Array("Enero","Febrero","Marzo");

//arreglo de objetos
const carrito = [
    {nombre: "Monitor", precio: 300},
    {nombre: "Teclado", precio: 60},
    {nombre: "Celular", precio: 200},
];

//forEach para recorrer
meses.forEach(function (mes){
    console.log(mes);
});

//forEach para buscar elemento
meses.forEach(function (mes){
    if(mes == "Febrero"){
        console.log("Si existe febrero");
    }
});

//includes para buscar en arreglos planos
let resultado = meses.includes("Marzo");
console.log(resultado);

//Some -> ideal para buscar en arreglos de objetos
resultado = carrito.some(function(producto){
    return producto.nombre == "Celular";
})
console.log(resultado);

//Reduce para sumar todos los valores
resultado = carrito.reduce(function (total,producto){
    return total + producto.precio;
}, 0);//valor inicial
console.log(resultado);

//Filter es para filtrar un arreglo
resultado = carrito.filter(function (producto){
    return producto.precio > 100;
});
console.log(resultado);

resultado = carrito.filter(function (producto){
    return producto.nombre != "Celular";
});
console.log(resultado);