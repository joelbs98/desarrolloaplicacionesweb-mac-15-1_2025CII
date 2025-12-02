const boton = document.querySelector("#boton");

boton.addEventListener("click", function () {
  console.log("Diste click");
  Notification.requestPermission().then((resultado) => {
    console.log(`El resultado es ${resultado}`);
    //Notification maneja automaticamente el resolve y el reject
  });
});
if (Notification.permission == "granted") {
  new Notification("Esta es una notificación", {
    icon: "../../curso_website/icons/node.svg",
    body: "Hola a todos",
  });
}
