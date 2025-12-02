//For loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//ejemplo
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(`El numero ${i} es par`);
  } else {
    console.log(`El numero ${i} es impar`);
  }
}

//for para recorrer un arreglo de objetos
const carrito = [
  { nombre: "Monitor", precio: 300 },
  { nombre: "Teclado", precio: 60 },
  { nombre: "Celular", precio: 200 },
];

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre);
}

//while loop -> desde la primera iteracion evalua la condición
let i = 0; //indice
while (i <= 100) {
  //condición
  if (i % 2 === 0) {
    console.log(`El numero ${i} es par`);
  } else {
    console.log(`El numero ${i} es impar`);
  }
  i++; //Incremento
}

let j = 0;
while (j < carrito.length) {
  console.log(carrito[j].nombre);
  j++;
}

//Do while loop -> ejecuta el codigo al menos una vez y luego evalua la condición
let k = 100;
do {
  console.log(k);
  k++;
} while (k < 10);
