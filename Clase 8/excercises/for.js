// 5. For
// a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
// b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
// c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
// d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).

console.log("----- 5 -----");

// 5.A
console.log("----- 5.A -----");
var array = ["casa", "departamento", "edificio", "rascacielos", "cabaña"];

for (let index = 0; index < array.length; index++) {
  //alert(array[index]);
  console.log(array[index]);
}

//5.B
console.log("----- 5.B -----");
array.forEach((e) => {
  e = e.replace(e[0], e[0].toUpperCase());
  //alert(e);
  console.log(e);
});

// 5.C
console.log("----- 5.C -----");
var sentence = "";

array.forEach((e) => {
  sentence = sentence + " " + e;
});

//alert(sentence);
console.log(sentence);

// 5.D
console.log("----- 5.D -----");

var array = [];

for (let index = 0; index < 10; index++) {
  array.push(index);
}

console.log(array);
