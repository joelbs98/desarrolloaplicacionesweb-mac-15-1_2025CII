const usuarioAutenticado = new Promise((resolve, reject) => {
  //resolve y reject pasan automaticamente
  const auth = false;
  if (auth) {
    resolve("Usuario autenticado"); //el promise se cumpla
  } else {
    reject("No se pudo iniciar sesión"); //el promise no se cumple
  }
});

console.log(usuarioAutenticado);

usuarioAutenticado
  .then(function (resultado) {
    //cuando se va por resolve
    console.log("Desde el promise");
    console.log(resultado);
  })
  .catch(function (error) {
    //cuando se va por el reject
    console.log(error);
  });

//En los promises exiten 3 valores
//Pending: No se ha cumplido pero tampoco se ha rechazado(en espera)
//Fullfilled: Ya se cumplio
//Rejected: Se ha rechazado o no se pudo cumplir
