
const contenedorPrincipal = document.getElementById("result-container");

function init(){
    fetch(`http://localhost:8080/api/v1/getContenidos`)
      .then((res) => res.json())
      .then((data) => {

        data.forEach(element => {
            crearPelicula(element);
        });
    
        console.log();
      });


}

init();


function getPeli(nombre) {
    console.log(nombre);
    fetch(`http://localhost:8080/api/v1/getContenido/${nombre}`)
      .then((res) => res.json())
      .then((data) => {

        data.forEach(element => {
            crearPelicula(element);
            console.log(element);
        });
    
       
      });
}

function getPelicula() {
    let nombre = document.getElementById("input-buscador").value;
    
    contenedorPrincipal.innerHTML=""
    getPeli(nombre);
}

function crearPelicula(pelicula){
    console.log(pelicula);
    

    const contenedorPeli = document.createElement("div");


    contenedorPeli.onclick = function() {
        const url = `http://127.0.0.1:5500/html/crearContenido.html?id=${encodeURIComponent(pelicula.id)}`;
        window.location.href = url; // Cambia esta URL a la que desees
    };


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
