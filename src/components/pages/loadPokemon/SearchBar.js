import { useState } from "react";

const SearchBar = ({ handleSearch, sortOrder, setSortOrder }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearch(event.target.value, sortOrder);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
    handleSearch(searchTerm, event.target.value);
  };

  return (

    <div className="my-7">

      <input
        type="text"
        placeholder="Search Pokémon..."
        value={searchTerm}
        onChange={handleInputChange}
        className="px-4 py-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 text-black rounded-xl"
      />

      <select
        value={sortOrder}
        onChange={handleSortOrderChange}
        className="ml-4 px-4 py-2 bg-gray-400 focus:outline-none focus:ring focus:border-blue-300 rounded-xl"
      >
        <option value="default">Default</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
      
    </div>
  );

};

export default SearchBar;
