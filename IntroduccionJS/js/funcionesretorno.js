//ejemplo 1
function sumar(num1,num2){
    return num1+num2;
}
const resultado = sumar(3,5);
console.log(resultado);

//ejemplo2
let total = 0;
function agregarCarrito(precio){
    return (total += precio);
}
function calcularTotalconImpuestos(total){
    return total * 1.15;
}

total = agregarCarrito(100);
total = agregarCarrito(200);
console.log(total);
const totalAPagar = calcularTotalconImpuestos(total);
console.log(`El total a pagar es ${totalAPagar}`);