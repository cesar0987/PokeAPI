import './Pokemons.css';
const Pokemons = ({ pokemonNames }) => {
    return (
        <ul className='pokeList'>
        {pokemonNames.map((name, index) => (
            <li key={index}>{name}</li>
        ))}
        </ul>
    );
    }

export default Pokemons;