//Declaración de una función
function sumar(){
    console.log(10+10);
}

//Llamar a una función
sumar();

//Expresión de una función
const sumar2 = function (){
    console.log(3+3);
}

sumar2();

//IIFE (Inmediately Invoked Function Expression)
// Una IIFE es una función que se define y se ejecuta inmediatamente
//despues de ser creada
//Solo son accedidas desde este archivo al ser anonima
(function (){
    console.log("Esto es una función");
})();