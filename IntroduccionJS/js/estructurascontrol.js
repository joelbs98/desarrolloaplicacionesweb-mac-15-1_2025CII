// = asignacion
// == comparacion - compara el valor pero no compara el tipo de dato
// === compara el valor y el tipo de dato

const puntaje = 1001;
if (puntaje !== 1000) {
  console.log("El puntaje no es 1000");
} else {
  console.log("El puntaje es 1000");
}

//ejemplo2
const efectivo = 1000;
const carrito = 800;
if (efectivo > carrito) {
  console.log("El usuario puede pagar");
} else {
  console.log("Fondos insuficientes");
}

//ejemplo3
const rol = "ADMINISTRADOR";
if (rol === "ADMINISTRADOR") {
  console.log("Acceso a todo el sistema");
} else if (rol === "EDITOR") {
  console.log("Acceso con permisos restringidos");
} else {
  console.log("No tienes acceso");
}
