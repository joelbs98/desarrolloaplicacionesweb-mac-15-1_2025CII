//Async
//Await

function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("Descargando nuevos clientes...");
    setTimeout(() => {
      resolve("Los clientes fueron descargados");
    }, 5000);
  });
}

function descargarUltimosPedidos() {
  return new Promise((resolve) => {
    console.log("Descargando pedidos...");
    setTimeout(() => {
      resolve("Los pedidos fueron descargados");
    }, 5000);
  });
}

async function app() {
  try {
    /*const resultado = await descargarNuevosClientes();
    //await pausa la ejecución de una función async hasta que una promesa
    //se resuelva(resolve) o se rechace (reject)
    console.log(resultado);*/
    const resultado = await Promise.all([
      descargarNuevosClientes(),
      descargarUltimosPedidos(),
    ]);
    console.log(resultado[0]);
    console.log(resultado[1]);
  } catch (error) {
    console.log(error);
  }
}

app();
console.log("Hola");
