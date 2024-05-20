
import './App.css';
import { useState } from 'react';
import Pokemons from '../Pokemons/Pokemons';
import axios from 'axios';
function App() {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [search, setSearch] = useState('');
  const handleClick = () => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then((response) => {
          setPokemonNames(response.data.results.map((pokemon) => pokemon.name));
          console.log(response.data.results.map((pokemon) => pokemon.name));
        });
    }
  const handleSearch = () => {
      console.log(search);
      axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
        .then((response) => {
          setPokemonNames([response.data.name]);
          console.log(response.data.name);}
          ).catch((error) => {
          console.log('error');
          setPokemonNames(['Pokemon not found']);
          }
        );
    }

  return (
    <div className="App">
      <button onClick={handleClick}>Get Pokemons</button>
      <input type="text" placeholder="Search Pokemon" onChange={(e)=>setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <Pokemons pokemonNames={pokemonNames} />
    </div>
  );
}

export default App;
