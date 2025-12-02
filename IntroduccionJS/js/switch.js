const metodoDePago = "tarjeta";

switch (metodoDePago) {
  case "tarjeta":
    console.log("Pagaste con tarjeta");
    break;
  case "efectivo":
    console.log("Pagaste con efectivo");
    break;
  case "Bitcoin":
    console.log("Pagaste con cripto");
    break;
  default:
    console.log("Aun no has pagado");
    break;
}
