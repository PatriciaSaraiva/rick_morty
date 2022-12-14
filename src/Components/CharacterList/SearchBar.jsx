import React from "react";

const SearchBar = (props) => {
  const { handleSearch } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="Search Character"
        onChange={handleSearch}
      ></input>
    </div>
  );
};

export default SearchBar;
