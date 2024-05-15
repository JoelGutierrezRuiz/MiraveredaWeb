function fetchPokemon(nombre) {
    console.log(nombre);
    fetch(`https://localhost:8080/api/v1/pelicula/${nombre}/`)
      .then((res) => res.json())
      .then((data) => {
        //createPokemon(data);
        //spinner.style.display = "none";
        console.log(data);
    });
}

function fetchPokemons() {
    let nombre = document.getElementById("busqueda").value;
    spinner.style.display = "block";
    fetchPokemon(nombre);
}


function createPokemon(pokemon) {
    console.log(pokemon);
    const flipCard = document.createElement("div");
    flipCard.classList.add("flip-card");
  
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
  
    flipCard.appendChild(cardContainer);
  
    const card = document.createElement("div");
    card.classList.add("pokemon-block");
  
    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");
  
    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;
  
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