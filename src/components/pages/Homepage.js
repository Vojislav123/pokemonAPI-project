import React, { useEffect, useState } from "react";
import PokemonList from "./loadPokemon/PokemonList";
import Pagination from "./loadPokemon/Pagination";
import SearchBar from "./loadPokemon/SearchBar";

const Homepage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;
  const totalItems = 864;
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetchPokemons();
  }, []);

  const fetchPokemons = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=864");
      const data = await response.json();
      setPokemons(data.results);
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
      <SearchBar handleSearch={handleSearch} />
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