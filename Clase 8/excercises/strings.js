// 2 Strings
// a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo eltexto en mayúscula (utilizar toUpperCase).
// b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
// c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable(utilizar substring).
// d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar elresultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase yel operador +).
// e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio enblanco. Encontrar la posición del primer espacio en blanco y guardarla en unavariable (utilizar indexOf).
// f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres yalgún espacio entre medio). Utilizar los métodos de los ejercicios anteriores paragenerar un nuevo string que tenga la primera letra de ambas palabras enmayúscula y las demás letras en minúscula (utilizar indexOf, substring,toUpperCase, toLowerCase y el operador +)

console.log("----- 2 -----");
//2.A
var string = "EstoTieneCaracteres";

console.log(`String: ${string} => En mayusculas: ${string.toUpperCase()}`);

//2.B

console.log(`String: ${string} => Primeros 5 chars: ${string.substring(0, 5)}`);

//2.C
var nueva = string.substring(string.length - 3);

console.log(`String: ${string} => Ultimos 3 chars: ${nueva}`);

//2.D
var nuevaMayus =
  string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase();

console.log(`String: ${string} => Primera Mayus: ${nuevaMayus}`);

//2.E
string = "Esto Tiene Caracteres";

var posBlanco = string.indexOf(" ");

console.log(`String: ${string} => Espacio en blanco en pos: ${posBlanco}`);

//2.F

string = "electroencefalografista otorrinonalringologo";

var palabras = string.split(" ");

var string2 =
  palabras[0].substring(0, 1).toUpperCase() +
  palabras[0].substring(1) +
  " " +
  palabras[1].substring(0, 1).toUpperCase() +
  palabras[1].substring(1);

console.log(`String: ${string} => Primera Mayuscula: ${string2}`);
