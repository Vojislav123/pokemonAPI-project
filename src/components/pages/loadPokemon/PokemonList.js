

const PokemonList = ({ pokemons }) => {
  const getImageUrl = (pokemonId) => {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId
      .toString()
      .padStart(3, "0")}.png`;
  };

  return (

    <div className="grid grid-cols-6 gap-4">
      {pokemons.map((pokemon) => (
        <div key={pokemon.name} className="text-center ">
          <img
            src={getImageUrl(pokemon.id)}
            alt={pokemon.name}
            className="mx-auto w-24 h-24"
          />
          <div className="mt-2">{pokemon.name}</div>
        </div>
      ))}
    </div>
  );

};

export default PokemonList;
