const form = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repeticionPassword = document.querySelector("#repeticionPassword");
const edad = document.querySelector("#edad");
const telefono = document.querySelector("#telefono");
const direccion = document.querySelector("#direccion");
const ciudad = document.querySelector("#ciudad");
const codigoPostal = document.querySelector("#codigoPostal");
const dni = document.querySelector("#dni");
const nombreTitulo = document.querySelector("#nombreTitulo");

function validarNombre() {
  if (nombre.value.length < 6) {
    nombre.nextElementSibling.innerHTML =
      "El nombre debe tener al menos 6 caracteres";
      nombre.nextElementSibling.classList.remove("hidden");
  } else if (!nombre.value.includes(" ")) {
    nombre.nextElementSibling.innerHTML =
      "El nombre debe tener al menos un espacio";
      nombre.nextElementSibling.classList.remove("hidden");
  } else {
    nombre.nextElementSibling.innerHTML = "";
    nombre.nextElementSibling.classList.add("hidden");
  }
};

function validarEmail() {
  if (!email.value.includes("@")) {
    email.nextElementSibling.innerHTML = "El email debe tener un @";
    email.nextElementSibling.classList.remove("hidden");
  } else if (!email.value.includes(".")) {
    email.nextElementSibling.innerHTML = "El email debe tener un .";
    email.nextElementSibling.classList.remove("hidden");
  } else {
    email.nextElementSibling.innerHTML = "";
    email.nextElementSibling.classList.add("hidden");
  }
};

function validarPassword() {
  if (password.value.length < 8) {
    password.nextElementSibling.innerHTML =
      "La contraseña debe tener al menos 8 caracteres";
      password.nextElementSibling.classList.remove("hidden");
  } else if (!password.value.match(/[0-9]/)) {
    password.nextElementSibling.innerHTML =
      "La contraseña debe tener al menos un número";
      password.nextElementSibling.classList.remove("hidden");
  } else if (!password.value.match(/[a-zA-Z]/)) {
    password.nextElementSibling.innerHTML =
      "La contraseña debe tener al menos una letra";
      password.nextElementSibling.classList.remove("hidden");
  } else {
    password.nextElementSibling.innerHTML = "";
    password.nextElementSibling.classList.add("hidden");
  }
};

function validarRepeticionPassword() {
  if (repeticionPassword.value !== password.value) {
    repeticionPassword.nextElementSibling.innerHTML =
      "Las contraseñas deben coincidir";
      repeticionPassword.nextElementSibling.classList.remove("hidden");
  } else {
    repeticionPassword.nextElementSibling.innerHTML = "";
    repeticionPassword.nextElementSibling.classList.add("hidden");
  }
};

function validarEdad() {
  if (edad.value < 18) {
    edad.nextElementSibling.innerHTML = "Debes ser mayor de 18 años";
    edad.nextElementSibling.classList.remove("hidden");
  } else {
    edad.nextElementSibling.innerHTML = "";
    edad.nextElementSibling.classList.add("hidden");
  }
};

// Una funcion validar telefono debe aceptar solo numeros, ni letras ni caracteres especiales, ni espacios ni parentesis y debe tener al menos 7 digitos
function validarTelefono() {
  if (telefono.value.length < 7) {
    telefono.nextElementSibling.innerHTML =
      "El teléfono debe tener al menos 7 caracteres";
      telefono.nextElementSibling.classList.remove("hidden");
  } else if (!telefono.value.match(/^\d+$/)) {
    telefono.nextElementSibling.innerHTML =
      "El teléfono debe tener solo números";
      telefono.nextElementSibling.classList.remove("hidden");
  } else {
    telefono.nextElementSibling.innerHTML = "";
    telefono.nextElementSibling.classList.add("hidden");
  }
};


function validarDireccion() {
  if (direccion.value.length < 5) {
    direccion.nextElementSibling.innerHTML =
      "La dirección debe tener al menos 5 caracteres";
      direccion.nextElementSibling.classList.remove("hidden");
  } else if (!direccion.value.includes(" ")) {
    direccion.nextElementSibling.innerHTML =
      "La direccion debe tener al menos un espacio";
      direccion.nextElementSibling.classList.remove("hidden");
  }else {
    direccion.nextElementSibling.innerHTML = "";
    direccion.nextElementSibling.classList.add("hidden");
  }
};

function validarCiudad() {
  if (ciudad.value.length < 3) {
    ciudad.nextElementSibling.innerHTML =
      "La ciudad debe tener al menos 3 caracteres";
      ciudad.nextElementSibling.classList.remove("hidden");
  } else {
    ciudad.nextElementSibling.innerHTML = "";
    ciudad.nextElementSibling.classList.add("hidden");
  }
};

function validarCodigoPostal() {
  if (codigoPostal.value.length < 3) {
    codigoPostal.nextElementSibling.innerHTML =
      "El código postal debe tener al menos 3 caracteres";
      codigoPostal.nextElementSibling.classList.remove("hidden");
  } else {
    codigoPostal.nextElementSibling.innerHTML = "";
    codigoPostal.nextElementSibling.classList.add("hidden");
  }
};

function validarDni() {
  if (dni.value.length < 7) {
    dni.nextElementSibling.innerHTML =
      "El DNI debe tener al menos 7 caracteres";
      dni.nextElementSibling.classList.remove("hidden");
  }
  if (dni.value.length > 8) {
    dni.nextElementSibling.innerHTML =
      "El DNI puede tener como maximo 8 caracteres";
      dni.nextElementSibling.classList.remove("hidden");
  } else if (!dni.value.match(/^\d+$/)) {
    dni.nextElementSibling.innerHTML =
      "El DNI debe tener solo números";
      dni.nextElementSibling.classList.remove("hidden");
  }
   else {
    dni.nextElementSibling.innerHTML = "";
    dni.nextElementSibling.classList.add("hidden");
  }
};



nombre.addEventListener("blur", validarNombre);
email.addEventListener("blur", validarEmail);
password.addEventListener("blur", validarPassword);
repeticionPassword.addEventListener("blur", validarRepeticionPassword);
edad.addEventListener("blur", validarEdad);
telefono.addEventListener("blur", validarTelefono);
direccion.addEventListener("blur", validarDireccion);
ciudad.addEventListener("blur", validarCiudad);
codigoPostal.addEventListener("blur", validarCodigoPostal);
dni.addEventListener("blur", validarDni);


function borrarError(e) {
  e.target.nextElementSibling.innerHTML = "";
  e.target.nextElementSibling.classList.add("hidden");
}

nombre.addEventListener("focus", borrarError);
email.addEventListener("focus", borrarError);
password.addEventListener("focus", borrarError);
repeticionPassword.addEventListener("focus", borrarError);
edad.addEventListener("focus", borrarError);
telefono.addEventListener("focus", borrarError);
direccion.addEventListener("focus", borrarError);
ciudad.addEventListener("focus", borrarError);
codigoPostal.addEventListener("focus", borrarError);
dni.addEventListener("focus", borrarError);

function validarFormulario(e) {
  e.preventDefault();
  validarNombre();
  validarEmail();
  validarPassword();
  validarRepeticionPassword();
  validarEdad();
  validarTelefono();
  validarDireccion();
  validarCiudad();
  validarCodigoPostal();
  validarDni();

if (
      nombre.nextElementSibling.classList.contains("hidden") &&
      email.nextElementSibling.classList.contains("hidden") &&
      password.nextElementSibling.classList.contains("hidden") &&
      repeticionPassword.nextElementSibling.classList.contains("hidden") &&
      edad.nextElementSibling.classList.contains("hidden") &&
      telefono.nextElementSibling.classList.contains("hidden") &&
      direccion.nextElementSibling.classList.contains("hidden") &&
      ciudad.nextElementSibling.classList.contains("hidden") &&
      codigoPostal.nextElementSibling.classList.contains("hidden") &&
      dni.nextElementSibling.classList.contains("hidden")
    ) {
                enviarDatos();
    } else {
      var mensaje = "Hay campos con errores: "
      if (!nombre.nextElementSibling.classList.contains("hidden")) {
        mensaje += "\n" + "* Nombre Inválido";
      }
      if (!email.nextElementSibling.classList.contains("hidden")) {
        mensaje += "\n" + "* Email Inválido";
      }
      if (!password.nextElementSibling.classList.contains("hidden")) {
        mensaje += "\n" + "* Contraseña Inválida";
      }
      if (!repeticionPassword.nextElementSibling.classList.contains("hidden")) {
        mensaje += "\n" + "* Repeticion de Contraseña Inválida";
      }
      if (!edad.nextElementSibling.classList.contains("hidden")) {
        mensaje += "\n" + "* Edad Inválida";
      }
      if (!telefono.nextElementSibling.classList.contains("hidden")) {
        mensaje += "\n" + "* Teléfono Inválido";
      }
      if (!direccion.nextElementSibling.classList.contains("hidden")) {
        mensaje += "\n" + "* Dirección Inválida";
      }
      if (!ciudad.nextElementSibling.classList.contains("hidden")) {
        mensaje += "\n" + "* Ciudad Inválida";
      }
      if (!codigoPostal.nextElementSibling.classList.contains("hidden")) {
        mensaje += "\n" + "* Código Postal Inválido";
      }
      if (!dni.nextElementSibling.classList.contains("hidden")) {
        mensaje += "\n" + "* DNI Inválido";
      }
      alert(mensaje);

    }
  }


  form.addEventListener("submit", validarFormulario);

  //Extra


  function actualizarNombreTitulo(e) {
    nombreTitulo.innerHTML = e.target.value;
  }

  nombre.addEventListener("keydown", actualizarNombreTitulo);
  nombre.addEventListener("focus", actualizarNombreTitulo);
  

function enviarDatos() {

  var datos = {
    nombre: nombre.value,
    email: email.value,
    edad: edad.value,
    password: password.value,
    telefono: telefono.value,
    direccion: direccion.value,
    ciudad: ciudad.value,
    codigoPostal: codigoPostal.value,
    dni: dni.value,
  };
  // var queryString = Object.keys(datos)
  //   .map((key) => key + "=" + datos[key])
  //   .join("&");
  // var url = "http://curso-dev-2021.herokuapp.com/newsletter?" + queryString;
  // fetch(url)
  //   .then(function (response) {
  //     if (response.ok) {
  //       return response.json();
  //     } else {
  //       throw "Error en la llamada Ajax";
  //     }
  //   })
  //   .then(function (data) {
  //     console.log(data);
  //     var modal = document.getElementById("modal");
  //     modal.classList.remove("hidden");
  //     var modalContenido = document.getElementById("modalContenido");
  //     modalContenido.innerHTML = "Datos enviados correctamente";
  //   })
  //   .catch(function (err) {
  //     console.log(err);
  //     var modal = document.getElementById("modal");
  //     modal.classList.remove("hidden");
  //     var modalContenido = document.getElementById("modalContenido");
  //     modalContenido.innerHTML = "Error al enviar los datos";
  //   });

  // Hago la  request 

  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var raw = JSON.stringify(datos);

  var options = {
    method: 'POST',
    headers: headers,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://64aae1250c6d844abedef0ce.mockapi.io/newsletter", options)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      document.querySelector("#modalCuerpo").innerHTML = result;
      modalContenido.classList.toggle("modal-cerrar");
      modal.classList.toggle("modal-cerrar");

    })
    .catch(error => console.log('error', error));
  }


// modal
const modal = document.querySelector(".modal");
const cerrar = document.querySelector(".modal-cerrar");
const abrir = document.querySelector(".modal-abrir");
const modalContenido = document.querySelector(".modal-contenido");

abrir.addEventListener("click", function(e){
  e.preventDefault();
  modalContenido.classList.toggle("modal-cerrar");
  modal.classList.toggle("modal-cerrar");
});

cerrar.addEventListener("click", function(){
  modalContenido.classList.toggle("modal-cerrar");
  modal.classList.toggle("modal-cerrar");
});
