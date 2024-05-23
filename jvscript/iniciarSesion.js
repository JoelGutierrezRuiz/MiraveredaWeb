function comprobacion(){
    const email = document.getElementById("email").value;
    const contrasenya = document.getElementById("contrasenya").value;
    iniciarSesion(email,contrasenya);
}
function iniciarSesion(email,contrasenya){
    fetch('http://192.168.1.136:8080/usuarios/iniciarSesion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(email,contrasenya)
    }).then(response => response.json())
      .then(data => console.log('Usuario Regresado:', data))
      .catch(error => console.error('Usuario No Encontrado:', error));
}