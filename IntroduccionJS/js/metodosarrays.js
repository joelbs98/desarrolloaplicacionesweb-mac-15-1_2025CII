const numeros = [1,2,3,4,5,6];
const numbers = [1,2,3,4,5,6];
console.table(numeros);
const meses = new Array("Enero","Febrero","Marzo");
console.table(meses);

//añadir elemento a arreglo

//no recomendada
numeros[6] = 60;
numeros[2] = 10;
console.table(numeros);

//no recomendada con push
numeros.push(50);
numeros.push(40,30,10,60);
console.table(numeros);

//no recomendada con unshift
numeros.unshift(40,20,5);
console.table(numeros);

//eliminar elemento a un arreglo
numeros.pop();//elimina el ultimo elemento del arreglo
numeros.shift();//elimina el primer elemento del arreglo

console.table(numeros);
numeros.splice(4,4);//vas al elemento que deseas y eliminas lo que deseas
console.table(numeros);

//Spread Operator
const nuevosNumeros = [...numbers,10];//buena practica ya que no modifica el arreglo original
console.table(nuevosNumeros);