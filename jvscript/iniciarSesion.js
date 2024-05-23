function comprobacion(){
    const email = document.getElementById("email").value;
    const contrasenya = document.getElementById("contrasenya").value;
    iniciarSesion(email,contrasenya);
}
function iniciarSesion(email, contrasenya) {
  fetch('http://192.168.1.136:8080/usuarios/iniciarSesion', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, contrasenya: contrasenya })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Usuario No Encontrado');
      }
      return response.json();
  })
  .then(data => {
      console.log('Usuario Regresado:', data);
      // Redirigir a la nueva página HTML
      window.location.href = 'html/settings.html';
  })
  .catch(error => {
      console.error('Usuario No Encontrado:', error);
      const errorMessage = document.getElementById('error-message');
      errorMessage.textContent = 'El Usuario no existe';
      errorMessage.style.display = 'block';
  });
}
