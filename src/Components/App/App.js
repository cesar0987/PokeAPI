
import './App.css';
import { useState } from 'react';
import Pokemons from '../Pokemons/Pokemons';

function App() {
  const [pokemonNames, setPokemonNames] = useState([]);

  const fetchPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=808');
    const data = await response.json();
    setPokemonNames(data.results.map(pokemon => pokemon.name));
  }

  const handleClick = () => {
    
    fetchPokemon();
    console.log(pokemonNames.length)
  }

  return (
    <div className="App">
      <h1>Pokemon</h1>
      <button onClick={handleClick}>Fetch Pokemon</button>
      <Pokemons pokemonNames={pokemonNames} />
    </div>
  );
}

export default App;
