function getPeli(nombre) {
    console.log(nombre);
    fetch(`http://172.30.134.216:8080/api/v1/pelicula/${nombre}`)
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

    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("pelicula_div");

    const nombre = document.createElement("p");
    nombre.textContent = pelicula.titulo;
    spriteContainer.appendChild(sprite);

    const number = document.createElement("p");
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    const cardBack = document.createElement("div");
    cardBack.classList.add("pokemon-block-back");

    cardBack.appendChild(progressBars(pokemon.stats));

    cardContainer.appendChild(card);
    cardContainer.appendChild(cardBack);
    pokemonContainer.appendChild(flipCard);
}
