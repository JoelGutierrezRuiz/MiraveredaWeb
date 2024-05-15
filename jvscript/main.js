function getPeli(nombre) {
    console.log(nombre);
    fetch(`http://localhost:8080/api/v1/pelicula/${nombre}`, {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZiNjg4MDlkZGMyYTAyOGZmNzZiODY3ZWE5ZjI5MCIsInN1YiI6IjY2NDRjYzAwOGU2NDk3ZWY2ZTViY2JjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MstHGYLhi2JqMKg98iEOknnVws5W12bYu5jRRSu7WN4'
    }
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error('Network response was not ok ' + res.statusText);
    }
    return res.json();
  })
  .then((data) => {
    crearPelicula(data);
  })
  .catch((error) => console.error('Error:', error));
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
