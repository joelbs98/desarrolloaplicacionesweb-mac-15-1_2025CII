console.log("Funciona");

//querySelector -> retorna ninguno o hasta un elemento que concuerde con el selector

const heading = document.querySelector(".header__texto h2"); //BEM - Block-Element - Modifier
console.log(heading);
const heading2 = document.querySelector("#heading"); // # para id - . para clase
console.log(heading2);
heading2.textContent = "Nuevo encabezado"; //modificar una propiedad del heading
heading.classList.add("nueva-clase"); //agregar una clase

//querySelectorAll -> retorna desde ninguno o todos los elementos que concuerden con un selector
const enlaces = document.querySelectorAll(".navegacion a");
console.log(enlaces);
console.log(enlaces[0]);
enlaces[0].textContent = "Ir a Google"; //modificar el texto
enlaces[0].href = "https://google.com"; //modificar el href
enlaces[0].classList.add("nueva-clase"); //añadir una clase
enlaces[0].classList.remove("navegacion__enlace"); //remover una clase

//getElementById
const heading3 = document.getElementById("heading");
console.log(heading3);

//Generar un nuevo enlace
const nuevoEnlace = document.createElement("A"); //Se recomienda poner entre mayusculas la etiqueta a crear
//agregar el href
nuevoEnlace.href = "https://ug.edu.ec";
//agregar el texto
nuevoEnlace.textContent = "UG";
//agregar la clase
nuevoEnlace.classList.add("navegacion__enlace");
//Agregarlo al documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);
console.log(nuevoEnlace);

//Eventos
//Window es global, document esta dentro de window
console.log(1);
window.addEventListener("load", function () {
  console.log(2);
}); //Añadiend un listener y cuando el evento ocurre se realiza la funcion
//"load" espera a que el JS y los archivos que dependen del HTMl esten listos

document.addEventListener("DOMContentLoaded", function () {
  //solo espera a que se descargue el html, se utiliza mas este
  console.log("3");
});

document.addEventListener("DOMContentLoaded", imprimir); //se puede crear la funcion aparte

function imprimir() {
  console.log(4);
}

window.onscroll = function () {
  //se llama cada vez que se haga scroll
  console.log("Scrolling");
};
/*
//Seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector(".boton--primario");
btnEnviar.addEventListener("click", function (evento) {
  console.log(evento);
  evento.preventDefault(); //por efecto un boton submit recarga la pgina

  //el event prevent default me sirve para validar el formulario antes de que se envie
  console.log("enviando formulario");
});*/

//Eventos de los inputs y textArea
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
nombre.addEventListener("change", function () {
  //Change se activa cuando dejo de escribir y salgo del input
  console.log("escribiendo...");
});
nombre.addEventListener("input", function (e) {
  //input se activa con cada tecla
  console.log("Escribiendo en tiempo real...");
  console.log(e); //para imprimir el caracter que se esta escribiendo en consola
  console.log(e.target.value); //para imprimir el valor completo
});

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

function leerTexto(e) {
  console.log(e.target.value);
  datos[e.target.id] = e.target.value;
  console.log(datos);
}

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

//El evento de submit
const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  //Validar el formulario
  const { nombre, email, mensaje } = datos; //destructuring
  console.log(nombre);
  if (nombre === "" || email === "" || mensaje === "") {
    console.log("Todos los campos son obligatorios");
    mostrarError("Todos los campos son obligatorios");
    return; //return corta la ejecucion del codigo
  }

  //Enviar el formulario
  console.log("Enviando formulario"); //En un formulario usar el evento submit
  mostrarOK("Formulario enviado correctamente");
});

function mostrarError(mensaje) {
  const error = document.createElement("P");
  error.textContent = mensaje;
  error.classList.add("error");
  formulario.appendChild(error);

  //Desaparezca despues de 5 segundos
  setTimeout(() => {
    error.remove();
  }, 5000);
}

function mostrarOK(mensaje) {
  const correcto = document.createElement("P");
  correcto.textContent = mensaje;
  correcto.classList.add("correcto");
  formulario.appendChild(correcto);

  //Desaparezca despues de 5 segundos
  setTimeout(() => {
    correcto.remove();
  }, 5000);
}
