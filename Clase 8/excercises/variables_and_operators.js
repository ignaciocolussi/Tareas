// 1. Variables y Operadoresa.
// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valo rde la suma de ambos números en una 3er variable.
// b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una3er variable.
// c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad deletras del string) guardando el resultado de la suma en una 3er variable (utilizarlength)

console.log("----- 1 -----");
//1.A
var a = 2;
var b = 4;

var suma = a + b;

console.log(`Suma: ${suma}`);

//1.B
var string1 = "Hola";
var string2 = "Adios";

var concatenadas = string1 + string2;

console.log(`Concatenadas: ${concatenadas}`);

//1.C

var length = concatenadas.length;

console.log(`Largo concatenadas: ${length}`);
