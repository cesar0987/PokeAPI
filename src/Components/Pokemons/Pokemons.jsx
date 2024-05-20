const Pokemons = ({ pokemonNames }) => {
    return (
        <ul>
        {pokemonNames.map((name, index) => (
            <li key={index}>{name}</li>
        ))}
        </ul>
    );
    }

export default Pokemons;