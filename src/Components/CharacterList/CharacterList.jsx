import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Character from './Character';
import SearchBar from './SearchBar'


function CharacterList() {
    const [characters, setCharacters] = useState([])
    const [searchValue, setSearchValue] = useState('') // set modifica o state(characters)
    const getCharacter = () => {

        axios
            .get('https://rickandmortyapi.com/api/character')
            .then(response => setCharacters(response.data.results))
        console.log(characters)
    }

    useEffect(() => {
        getCharacter()
    }, [])

    const handleSearch = (e) => {
        const query = e.target.value
        axios
            .get(`https://rickandmortyapi.com/api/character/?name=${query}`)
            .then(response => setCharacters(response.data.results))
    }

    const displayCharacters = characters.map(character =>
        <Character {...character} />)

    return (
        <div>
            <SearchBar searchValue={searchValue}
                handleSearch={handleSearch} />
            <div className="header">
                <h1>Rick and Morty App</h1>
                <button className='btnShowList' type="button" onClick={getCharacter}>
                    Show characters
                </button>
            </div>

            <div className="characterList">
                {displayCharacters}
            </div>
        </div>
    )
}


export default CharacterList

