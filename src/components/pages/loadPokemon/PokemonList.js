const PokemonList = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.name}>{pokemon.name}</div>
      ))}
    </div>
  );
};

export default PokemonList;