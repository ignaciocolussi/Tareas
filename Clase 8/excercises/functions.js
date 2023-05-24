// 6. Funciones
// a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
// b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
// c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
// d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual

console.log("----- 6 -----");

// 6.A
console.log("----- 6.A -----");

function suma(a, b) {
  return a + b;
}

var resultado = suma(3, 6);
console.log(`Resultado suma: ${resultado}`);

// 6.B
console.log("----- 6.B -----");

function suma(a, b) {
  if (!Number(a) || !Number(b)) {
    alert("Alguno de los parametros no es un numero");
    return NaN;
  }

  return a + b;
}

// 6.C
console.log("----- 6.C -----");

function validateInteger(i) {
  return Number.isInteger(i);
}

console.log(validateInteger("r"));

// 6.D
console.log("----- 6.D -----");

function suma(a, b) {
  if (!Number(a) || !Number(b)) {
    alert("Alguno de los parametros no es un numero");
    return undefined;
  }

  if (!validateInteger(a)) {
    alert(`El numero ${a} no es entero. Se redondea`);
    a = Number.parseInt(a);
  }

  if (!validateInteger(b)) {
    alert(`El numero ${b} no es entero. Se redondea`);
    b = Number.parseInt(b);
  }

  return a + b;
}

console.log(`Resultado suma: ${suma("fg", 7.9)}`);

// 6.E
console.log("----- 6.E -----");

function validateIntegers(a, b) {
  if (!validateInteger(a)) {
    alert(`El numero ${a} no es entero. Se redondea`);
    a = Number.parseInt(a);
  }
  if (!validateInteger(b)) {
    alert(`El numero ${b} no es entero. Se redondea`);
    b = Number.parseInt(b);
  }

  return [a, b];
}

function suma(a, b) {
  if (!Number(a) || !Number(b)) {
    alert("Alguno de los parametros no es un numero");
    return NaN;
  }

  [a, b] = validateIntegers(a, b);

  return a + b;
}

console.log(`Resultado suma: ${suma(3.14, 4.85)}`);
