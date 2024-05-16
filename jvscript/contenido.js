function getPeli(nombre) {
    console.log(nombre);
    fetch(`http://localhost:8080/api/v1/pelicula/${nombre}`)
      .then((res) => res.json())
      .then((data) => {
        crearPelicula(data);
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
    anyo.textContent = "2024";

    const duracion = document.createElement("p");
    duracion.classList.add("duracion-peli");
    duracion.textContent = "90 minutos";

    fechaDuracionContenedor.appendChild(anyo)
    fechaDuracionContenedor.appendChild(duracion)
    
    const puntuacion = document.createElement("p");
    puntuacion.classList.add("puntuacion-peli");
    puntuacion.textContent = "9,9";


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
    contenedorPeli.appendChild(optionsContenedor)

    contenedorPrincipal.appendChild(contenedorPeli);

}
