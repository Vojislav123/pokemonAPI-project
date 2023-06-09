import { useState } from "react";
import PokeModal from "./PokeModal";
import LikePokemon from "./LikePokemon";

const PokemonList = ({ pokemons }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState({});
  const openDetail = async (pokemon) => {
    const response = await fetch(pokemon.url);
    const detail = await response.json();
    const pokemonDetail = {
      abilities: detail.abilities,
      name: pokemon.name,
      types: detail.types,
      species: detail.species,
      imageUrl: pokemon.imageUrl,
      weight: detail.weight,
      height: detail.height,
    };

    setIsModalOpen(true);
    setCurrentPokemon(pokemonDetail);
    console.log(pokemonDetail);
  };

  

  

  return (
    <div className="grid grid-cols-6 gap-4">
      {
      pokemons.map((pokemon, index) => (
        <div>
          <div
            key={pokemon.name}
            className="text-center cursor-pointer "
            onClick={() => openDetail(pokemon)}
          >
            <img
              src={pokemon.imageUrl}
              alt={pokemon.name}
              className="mx-auto my-2 w-20 h-20"
            />
            <div className="mt-2">{pokemon.name}</div>
          </div>
         <LikePokemon index={pokemon.id}/>
        </div>
      ))}
      {isModalOpen && (
        <PokeModal setIsModalOpen={setIsModalOpen} pokemon={currentPokemon} />
      )}
    </div>
  );
};

export default PokemonList;
