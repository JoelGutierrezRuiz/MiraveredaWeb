const receptor = new URLSearchParams(window.location.search);
const idUsuario = receptor.get("id");

const nombre = document.getElementById('nombre');
const apellidos = document.getElementById('apellidos');
const email = document.getElementById("email");
const contrasena = document.getElementById('contraseña');
const domicilio = document.getElementById('domicilio');
const codigoPostal = document.getElementById('CP');
const fechaNac = document.getElementById('fechaNac');
const idRol = document.getElementById('optionSelect');


console.log(idUsuario)
if(idUsuario!=null){
  getUsuarioById(idUsuario);
}


function getUsuarioById(id) {
    fetch(`http://localhost:8080/usuariosId/${id}`)
    .then((res) => res.json())
    .then((data) => {
        nombre.value = data.nombre; 
        apellidos.value = data.apellidos;
        email.value = data.email;
        contrasena.value = data.contrasenya;
        domicilio.value = data.domicilio;
        codigoPostal.value = data.cp;
        fechaNac.value = data.fechaNac;
     });
}

function comprobarAnyadiroModificar(){
  let usuario = {
    idRol: idRol.value,
    nombre: nombre.value,
    contrasena: contrasena.value,
    apellidos: apellidos.value,
    email: email.value,
    domicilio: domicilio.value,
    codigoPostal: codigoPostal.value,
    fechaNac: fechaNac.value
  };
  if (idUsuario==null) {
    addUsuario(usuario);
  }else{
    updateUsuario(usuario);
  }
}

function addUsuario(usuario) {
  console.log("entro post")
  if (!idRol) {
      alert('Por favor seleccione un tipo.');
      return;
  }
  fetch('http://localhost:8080/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
    }).then(response =>{
      if (!response.ok) {
          throw new Error('Usuario No Añadido');
      }
      return response.json();
      })
      .then(data => {
        console.log('Usuario Creado:', data);
        // Redirigir a la nueva página HTML
        window.location.href = 'gestionarUsuarios.html';
      })
      .catch(error => console.error('Error:', error));
      const errorMessage = document.getElementById('error-message');
      errorMessage.textContent = 'El Usuario ya existe';
      errorMessage.style.display = 'block';
}

function updateUsuario(usuario) {
  console.log("entro put")
  fetch('http://localhost:8080/usuarios', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
    }).then(response => {
      if (!response.ok) {
          throw new Error('Usuario No Modificado');
      }
      return response.json();
      })
      .then(data => {
        console.log('Usuario Modificado:', data);
        // Redirigir a la nueva página HTML
        window.location.href = 'gestionarUsuarios.html';
    })
      .catch(error => console.error('Error:', error));
      const errorMessage = document.getElementById('error-message');
      errorMessage.textContent = 'El Usuario no se pudo modificar por algun error';
      errorMessage.style.display = 'block';
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

