/*
function obtenerEmpleados() {
  const url = "js/empleados.json";
  fetch(url)
    .then((resultado) => {
      //el primer then es para que el resultado de fetch sea un json
      //y se lo retorne al siguiente .then
      console.log(resultado);
      return resultado.json();
    })
    .then((datos) => {
      console.log(datos);
      console.log(datos.empleados);
      const { empleados } = datos;
      //aplicando destructuring para extrarer la propiedad empleados
      //del objeto datos y asignarlo a una nueva variable
      console.log(empleados);
      empleados.forEach((empleado) => {
        console.log(empleado);
        console.log(empleado.id);
        console.log(empleado.nombre);

        document.querySelector(".contenido").textContent = empleado.nombre;
        //mostrar el empleado.nombre en el html
      });
    }); //fetch recibe como parametro la url de la api
}
*/

async function obtenerEmpleados() {
  const url = "js/empleados.json";
  const resultado = await fetch(url);
  const datos = await resultado.json();
  console.log(datos);
}
obtenerEmpleados();
