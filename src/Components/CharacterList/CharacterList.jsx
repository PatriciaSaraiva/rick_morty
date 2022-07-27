import axios from "axios";
import React, { useState, useEffect } from "react";
import Character from "./Character";
import SearchBar from "./SearchBar";
import AddCharacterForm from "./AddCharacterForm";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState(""); // set modifica o state(characters)

  const getCharacter = () => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => setCharacters(response.data.results));
  };

  useEffect(() => {
    getCharacter();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value;
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then((response) => setCharacters(response.data.results));
  };

  const addNewCharacter = (e, newCharacter) => {
    e.preventDefault();
    setCharacters([newCharacter, ...characters]);
  };
  console.log(characters);

  const handleClick = (name) => {
    const updatedCharacters = [...characters];
    const characterIndex = characters.findIndex(
      (character) => character.name === name
    );
    updatedCharacters.splice(characterIndex, 1);

    setCharacters(updatedCharacters);
  };

  const displayCharacters = characters.map((character) => (
    <div key={character.name}>
      <Character {...character} />
      <button onClick={() => handleClick(character.name)}>Delete</button>
    </div>
  ));

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <div className="header">
        <h1>Rick and Morty App</h1>
        <button className="btnShowList" type="button" onClick={getCharacter}>
          Show characters
        </button>
      </div>

      <div className="characterList">
        <AddCharacterForm addNewCharacter={addNewCharacter} />
        {displayCharacters}
      </div>
    </div>
  );
}

export default CharacterList;
