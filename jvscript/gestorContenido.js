
const contenedorPrincipal = document.getElementById("result-container");

function init(){
    fetch(`http://localhost:8080/api/v1/getContenidos`)
      .then((res) => res.json())
      .then((data) => {

function putContenido(){

    const url = "http://localhost:8080/api/v1/insertarContenido"

    const img = document.getElementById("imageUrl").value;
    const tit = document.getElementById("nombre").value;
    const desc = document.getElementById("desc").value;
    const dur = document.getElementById("duracion").value;
    const punt = document.getElementById("valoMedia").value;
    const pre = document.getElementById("precio").value;
    const fech = document.getElementById("fechaEst").value;
    const gen = document.getElementById("genero").value;
    const dir = document.getElementById("director").value;
    const tar = document.getElementById("tarifa").value;
    const tip = document.getElementById("optionSelect").value;


    const contenido =
    {
        imagen:img,
        titulo:tit,
        descripcion:desc,
        duracion:dur,
        puntuacion:punt,
        precio:pre,
        fecha:fech,
        genero:gen,
        director:dir,
        tarifa:tar,
        tipo:tip
    }
    console.log(contenido);

    const options = {
        method: 'POST',
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






function getPeli(nombre) {
    console.log(nombre);
    fetch(`http://localhost:8080/api/v1/contenido/${nombre}`)
      .then((res) => res.json())
      .then((data) => {
        crearPelicula(data[0]);
        console.log();
      });
}

function getPelicula() {
    let nombre = document.getElementById("input-buscador").value;
    getPeli(nombre);
}

function crearPelicula(pelicula){
    console.log(pelicula);
    

    const contenedorPrincipal = document.getElementById("result-container");

    const contenedorPeli = document.createElement("div");
    contenedorPeli.classList.add("contenedor-peli");

    const contenedorInfo = document.createElement("div");
    contenedorInfo.classList.add("infoPeli-contenedor");

    const titulo = document.createElement("h2");
    titulo.classList.add("titulo-peli");
    titulo.textContent = pelicula.titulo;

    const fechaDuracionContenedor = document.createElement("div");
    fechaDuracionContenedor.classList.add("fechaDuracion-contenedor");

    const anyo = document.createElement("p");
    anyo.classList.add("anyo-peli");
    anyo.textContent = pelicula.fecha;

    const duracion = document.createElement("p");
    duracion.classList.add("duracion-peli");
    duracion.textContent = pelicula.duracion+'"';

    fechaDuracionContenedor.appendChild(anyo)
    fechaDuracionContenedor.appendChild(duracion)
    
    const puntuacion = document.createElement("p");
    puntuacion.classList.add("puntuacion-peli");
    puntuacion.textContent = pelicula.valoMedia;

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
    imagen.src = pelicula.img


    contenedorPeli.appendChild(imagen)
    contenedorPeli.appendChild(contenedorInfo)
    contenedorPeli.appendChild(optionsContenedor)

    contenedorPrincipal.appendChild(contenedorPeli);

}
