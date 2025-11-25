//Declaración de una función
function sumar(numero1,numero2){//parametros
    console.log(numero1+numero2);
}

sumar(10,20);//Argumentos o valores reales
sumar(20,20);
sumar(30,20);

const sumar2 = function (numero1,numero2){
    console.log(numero1+numero2);
};
sumar2(5,5);

//Parametros por default
function sumar3(numero1 = 0,numero2 = 0){//parametros
    console.log(numero1+numero2);
}
sumar3(5);