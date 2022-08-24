const pokemonContainer = document.querySelector("#containerPokemon");

let min = 1,
  max = 7;

const fetchPokemons = (min, max) => {
  for (let i = min; i <= min + max; i++) {
    fetchPokemon(i);
  }
};

const fetchPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

  const data = await response.json();

     
     const imagen = document.createElement('img')
     imagen.src = data.sprites.other.home.front_default;
     imagen.classList.add("img-thumbnail", "rounded");
     imagen.style.width="200px"

     pokemonContainer.appendChild(imagen)
};

fetchPokemons(min, max);
