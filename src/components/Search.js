import React from "react";

function Search({searchText, setSearchText }) {
  function handleChange(event) {
    setSearchText(event.target.value)
  }
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        onChange={handleChange}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchText}
      />
    </div>
  );
}

export default Search;
