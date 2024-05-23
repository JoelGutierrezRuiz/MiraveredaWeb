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
    fetch(`http://192.168.1.136:8080/usuariosId/${id}`)
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
  if (idUsuario==null) {
    addUsuario();
  }else{
    updateUsuario();
  }
}

function addUsuario() {
  const usuario = {
    idRol: idRol.value,
    nombre: nombre.value,
    contrasena: contrasena.value,
    apellidos: apellidos.value,
    email: email.value,
    domicilio: domicilio.value,
    codigoPostal: codigoPostal.value,
    fechaNac: fechaNac.value
  };
  console.log("entro post")
  if (!idRol) {
      alert('Por favor seleccione un tipo.');
      return;
  }
  fetch('http://192.168.1.136:8080/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario)
    }).then(response => response.json())
      .then(data => console.log('Usuario creado:', data))
      .catch(error => console.error('Error:', error));
}

function updateUsuario() {
  console.log("entro put")
  const usuario2 = {
    idRol: idRol.value,
    nombre: nombre.value,
    contrasena: contrasena.value,
    apellidos: apellidos.value,
    email: email.value,
    domicilio: domicilio.value,
    codigoPostal: codigoPostal.value,
    fechaNac: fechaNac.value
  };
  fetch('http://192.168.1.136:8080/usuarios', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(usuario2)
    }).then(response => response.json())
      .then(data => console.log('Usuario Modificado:', data))
      .catch(error => console.error('Error:', error));
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

