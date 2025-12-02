const numero1 = 20;
const numero3 = 30;
//cuando hay un error en JS se detiene la ejecución

console.log(numero1);
//console.log(numero2);
console.log(numero3);

try {
  console.log(numero2);
} catch (error) {
  console.log(error);
}
console.log(numero3);
