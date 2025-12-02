//This -> hace referencia al contexto en el que se esta llamando

const nombre = "Angie";
const total = 4500;

const reservacion = {
  nombre: "Joel",
  apellido: "Barba",
  total: 3000,
  pagado: true,
  informacion: function () {
    console.log(
      `El cliente ${this.nombre} reservó y su valor a pagar es ${this.total}`
    );
  },
};

reservacion.informacion();
