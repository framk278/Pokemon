import pokemon from './pokemon.js';

const pokemonInfoDiv = document.getElementById('pokemonInfo');

for (let i = 0; i < 251; i++) {
  const PokemonNum = pokemon.pokemon[i % pokemon.pokemon.length].num;
  const PokemonName = pokemon.pokemon[i % pokemon.pokemon.length].name;
  const PokemonType = pokemon.pokemon[i % pokemon.pokemon.length].type;
  const PokemonImg = pokemon.pokemon[i % pokemon.pokemon.length].img;

  console.log(`Pokemon number:  ${PokemonNum}`);
  console.log(`Pokemon name:  ${PokemonName}`);
  console.log(`Pokemon type:  ${PokemonType}`);
  console.log(`Pokemon image:  ${PokemonImg}`);
  



  const numElement = document.createElement('p');
  numElement.textContent = `Pokemon number: ${PokemonNum}`;

  const nameElement = document.createElement('p');
  nameElement.textContent = `Pokemon name: ${PokemonName}`;

  const typeElement = document.createElement('p');
  typeElement.textContent = `Pokemon type: ${PokemonType}`;

  const imgElement = document.createElement('img');
  imgElement.src = PokemonImg;
  imgElement.alt = PokemonName;

  imgElement.classList.add('compact-image');

  
  pokemonInfoDiv.appendChild(numElement);
  
  pokemonInfoDiv.appendChild(nameElement);
  
  pokemonInfoDiv.appendChild(typeElement);
  
  pokemonInfoDiv.appendChild(imgElement);

}