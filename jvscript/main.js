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
    let nombre = document.getElementById("nombrePeli").value;
    getPeli(nombre);
}
function crearPelicula(){
    console.log(pelicula);

    const conte = getElementById("componentes");

    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("pelicula_div");

    const nombre = document.createElement("p");
    nombre.textContent = pelicula.titulo;
    spriteContainer.appendChild(nombre);

    conte.appendChild(spriteContainer);
}
