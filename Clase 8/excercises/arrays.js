// Arrays
// a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio","Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar porconsola los meses 5 y 11 (utilizar console.log).
// b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
// c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
// d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
// e. Invertir el orden del array (utilizar reverse).
// f. Unir todos los elementos del array en un único string donde cada mes esteseparado por un guión - (utilizar join).
// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre(utilizar slice).

console.log("----- 3 -----");
var array = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

//3.A
console.log(`Mes 5: ${array[5]}, Mes 11: ${array[11]}`);

//3.B
var sort = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
sort.sort();
console.log(sort);

//3.C
var arr2 = array;
arr2.push("Al final");
arr2.unshift("Al inicio");
console.log(`Agregando elementos: ${arr2}`);

//3.D
arr2.shift();
arr2.pop();
console.log(`Eliminando elementos: ${arr2}`);

//3.E
console.log(`Reverso: ${array.reverse()}`);

//3.F
console.log(`Unidos: ${array.join("-")}`);

//3.G
array.reverse(); // vuelvo a acomodarlo
var arr3 = array.slice(4, 11);
console.log(`Desde Mayo a Noviembre: ${arr3}`);
