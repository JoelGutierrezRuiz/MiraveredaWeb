
function getUsua(nombre) {
  let contenedorPrincipal = document.getElementById("result-container");
  contenedorPrincipal.innerHTML = "";
  console.log(nombre);
    fetch(`http://172.30.134.215:8080/usuarios/${nombre}`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((usuario) => {
          crearUsuario(usuario);
        })
      });
}

function init(){
  getUsuarios();
}


function getUsuarios() {
  let contenedorPrincipal = document.getElementById("result-container");
  contenedorPrincipal.innerHTML = "";
  console.log();
    fetch(`http://172.30.134.215:8080/usuarios`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((usuario) => {
          crearUsuario(usuario);
        })
      });
}



function getUsuario() {
  let nombre = document.getElementById("buscadorUsuario").value;
  if (nombre==""){
    console.log("hola");
    getUsuarios();
  }else{
    getUsua(nombre);
  }
}

function addUsuario() {
  const idRol = document.getElementById('optionSelect').value;
  const nombre = document.getElementById('nombre').value;
  const contrasena = document.getElementById('contraseña').value;
  const apellidos = document.getElementById('apellidos').value;
  const email = document.getElementById('email').value;
  const domicilio = document.getElementById('domicilio').value;
  const codigoPostal = document.getElementById('CP').value;
  const fechaNac = document.getElementById('fechaNac').value;

  if (!idRol) {
    alert('Por favor seleccione un tipo.');
    return;
  }
  
  const usuario = {
    idRol: idRol,
    nombre: nombre,
    contrasena: contrasena,
    apellidos: apellidos,
    email: email,
    domicilio: domicilio,
    codigoPostal: codigoPostal,
    fechaNac: fechaNac
  };

  // Enviando el objeto Usuario al servidor
  fetch('http://172.30.134.215:8080/usuarios', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
  }).then(response => response.json())
    .then(data => console.log('Usuario creado:', data))
    .catch(error => console.error('Error:', error));
}

function eliminarUsuario(email, contenedorUsuario) {
  fetch(`http://172.30.134.215:8080/usuarios/${email}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    } else if (response.status === 302) { // HTTP Status 302 Found
      return response.json().then(data => {
        throw new Error('Usuario no encontrado');
      });
    }
    throw new Error('Error al eliminar el usuario');
  })
  .then(data => {
    if (data) { 
      contenedorUsuario.remove();
      console.log('Usuario eliminado correctamente');
    } else {
      console.error('No se pudo eliminar el usuario');
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}


function crearUsuario(usuario){
  console.log(usuario);

  let contenedorPrincipal = document.getElementById("result-container");

  const contenedorPeli = document.createElement("div");
  contenedorPeli.classList.add("contenedor-peli");

  const contenedorInfo = document.createElement("div");
  contenedorInfo.classList.add("infoPeli-contenedor");

  const titulo = document.createElement("h2");
  titulo.classList.add("titulo-peli");
  titulo.textContent = usuario.nombre;

  const fechaDuracionContenedor = document.createElement("div");
  fechaDuracionContenedor.classList.add("fechaDuracion-contenedor");

  const anyo = document.createElement("p");
  anyo.classList.add("anyo-peli");
  anyo.textContent = usuario.apellido;

  fechaDuracionContenedor.appendChild(anyo)
  
  const puntuacion = document.createElement("p");
  puntuacion.classList.add("puntuacion-peli");
  puntuacion.textContent = usuario.email;

  // Crear un botón para eliminar el usuario
  const botonEliminar = document.createElement("button");
  botonEliminar.classList.add("boton-eliminar");
  botonEliminar.textContent = "Eliminar";

  // Agregar un controlador de eventos clic para el botón eliminar
  botonEliminar.addEventListener("click", function() {
    eliminarUsuario(usuario.email, contenedorPeli);
  });


  const optionsContenedor = document.createElement("div");
  optionsContenedor.classList.add("options-contenedor");

  const optionsImg = document.createElement("img");
  optionsImg.classList.add("optionsImg-peli");
  optionsImg.src ="https://i.pinimg.com/originals/b5/4d/f1/b54df198d21ac86bedead6c4a364ef32.png"

  optionsContenedor.appendChild(optionsImg)

  contenedorInfo.appendChild(titulo);
  contenedorInfo.appendChild(fechaDuracionContenedor);
  contenedorInfo.appendChild(puntuacion);

  const imagen = document.createElement("img");
  imagen.classList.add("imagen-peli");
  imagen.src ="https://www.latercera.com/resizer/qZrjXd1futa7mw2eSRDhcq7ureU=/900x600/filters:focal(872x509:882x499)/cloudfront-us-east-1.images.arcpublishing.com/copesa/ISPSLNQJQ5EMVEBYIJUOZA7I7Y.jpg"

  contenedorPeli.appendChild(imagen)
  contenedorPeli.appendChild(contenedorInfo)
  contenedorPeli.appendChild(botonEliminar);
  contenedorPeli.appendChild(optionsContenedor)

  contenedorPrincipal.appendChild(contenedorPeli);

}

function cargarImagen() {

  const url = document.getElementById('imageUrl').value;

  // Crear un nuevo elemento de imagen
  const img = document.getElementById('userImg');
  img.src = url;
  img.alt = 'Imagen proporcionada';

}

function showInputs() {
  // Obtener el valor del select
  const selectedOption = document.getElementById('optionSelect').value;

  // Ocultar todos los grupos de inputs
  const inputGroups = document.getElementsByClassName('input-group');
  for (let group of inputGroups) {
      group.style.display = 'none';
  }

  // Mostrar el grupo de inputs correspondiente a la opción seleccionada
  if (selectedOption) {
      document.getElementById(selectedOption + 'Inputs').style.display = 'block';
  }
}

init();
