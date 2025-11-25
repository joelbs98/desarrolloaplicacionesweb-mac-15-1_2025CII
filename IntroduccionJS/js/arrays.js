//Arreglos o arrays

const numeros = [1,2,3,4,5,6];
console.log(numeros);
console.table(numeros);//una forma mas legible de ver un arreglo

const meses = new Array("Enero","Febrero","Marzo");//menos comun

const arreglo = [
    "Hola",
    true,
    20,
    {nombre: "Joel", apellido: "Barba"},
    [1,2,3],
];
console.log(arreglo);

//acceder a los valores de un arreglo a traves de su indice
console.log(numeros[2]);

//conocer la extensión de un arreglo
console.log(numeros.length);

//iterar todo un array
numeros.forEach(function (numero){
    console.log(numero);
});
