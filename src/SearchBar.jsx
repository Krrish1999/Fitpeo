import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="rounded-lg">
    <SearchIcon className="round text-gray-400"/>
    <input
    
      type="text"
      placeholder="Search..."
      onChange={handleChange}
      value={query}
    />
    </div>
  );
};
export default SearchBar;