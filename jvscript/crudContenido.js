const img = document.getElementById("imageUrl");
const imgPeli = document.getElementById("userImg")
const tit = document.getElementById("nombre");
const desc = document.getElementById("desc");
const dur = document.getElementById("duracion");
const punt = document.getElementById("valoMedia");
const pre = document.getElementById("precio");
const fech = document.getElementById("fechaEst");
const gen = document.getElementById("genero");
const dir = document.getElementById("director");
const tar = document.getElementById("tarifa");
const tip = document.getElementById("tipo");

let contenido;





function postContenido(){

  const url = "http://localhost:8080/api/v1/insertarContenido"
  const contenido =
  {
      id:123456,
      precio:pre.value,
      idDirector:24,
      genero:gen.value,
      id_tarifa:1,
      fecha:fech.value,
      puntuacion:punt.value,
      descripcion:desc.value,
      duracion:dur.value,
      tipo:tip.value,
      titulo:tit.value,
      imagen:img.value,
  }
  console.log(contenido);

  const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(contenido) // Convertir datos a formato JSON antes de enviarlos
  };
  
  // Realizar la solicitud Fetch
  fetch(url, options)
      .then(response => {
          if (!response.ok) {
              throw new Error('Error en la solicitud: ' + response.status);
          }
          return response.json();
      })
      .then(data => {
          console.log('Respuesta recibida:', data);
      })
      .catch(error => {
          console.error('Error en la solicitud:', error);
      });




}







function getDirector(id) {

    fetch(`http://localhost:8080/api/v1/director/${id}`)
      .then((res) => res.json())
      .then((director) => {
            dir.value=director.nombre;
      });
}

const receptor = new URLSearchParams(window.location.search);
const idContenido = receptor.get("id")

function getPeli(id) {
    fetch(`http://localhost:8080/api/v1/getContenidoById/${id}`)
      .then((res) => res.json())
      .then((data) => {
        contenido=data;
        tit.value = data.titulo; 
        imgPeli.src = data.img;
        desc.value = data.desc;
        pre.value = data.precio;
        dur.value = data.duracion;
        punt.value = data.valoMedia;
        fech.value = data.fecha;
        getDirector(contenido.idDirector);;
       });
}




console.log(idContenido)
if(idContenido!=null){
  getPeli(idContenido);
}