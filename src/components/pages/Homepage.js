import { useEffect, useState } from "react";

import PokemonList from "./loadPokemon/PokemonList";
import Pagination from "./loadPokemon/Pagination";
import SearchBar from "./loadPokemon/SearchBar";

const Homepage = ({ isReload, setIsReload }) => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");
  const itemsPerPage = 24;

  useEffect(() => {
    if (isReload) {
      setCurrentPage(1);
      setIsReload(false);
      setSortOrder("default");
      setSearchTerm("");
    }
    fetchPokemons();
  }, [isReload, setIsReload]);

  const fetchPokemons = async () => {
    try {
      let url = `https://pokeapi.co/api/v2/pokemon?limit=864`;

      const response = await fetch(url);
      const data = await response.json();
      const results = data.results;
      setPokemons(
        results.map((item, index) => {
          return {
            name: item.name,
            imageUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(
              index + 1
            )
              .toString()
              .padStart(3, "0")}.png`,
            url: item.url,
            id:index
          };
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (searchTerm, sortOrder) => {
    setSearchTerm(searchTerm);
    setSortOrder(sortOrder);
    setCurrentPage(1);
  };

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedPokemons = [...filteredPokemons];

  if (sortOrder === "asc") {
    sortedPokemons.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === "desc") {
    sortedPokemons.sort((a, b) => b.name.localeCompare(a.name));
  }

  const totalPages = Math.ceil(filteredPokemons.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPokemons = sortedPokemons.slice(startIndex, endIndex);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <SearchBar
        handleSearch={handleSearch}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <PokemonList pokemons={paginatedPokemons} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
      />
    </div>
  );
};

export default Homepage;
