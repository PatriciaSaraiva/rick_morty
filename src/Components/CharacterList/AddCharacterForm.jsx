import React, { useState } from 'react';

function AddCharacterForm(props) {

    const [newCharacter, setNewCharacter] = useState(
        {
            name: '',
            status: '',
            species: '',
            image: ''
        }
    )
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setNewCharacter({ ...newCharacter, [name]: value })
    }

    console.log(newCharacter)

    const { addNewCharacter } = props
    return (
        <div>
            <form onSubmit={(e) => { addNewCharacter(e, newCharacter) }}>

                <label for='name'>Name</label>
                <input name='name' id='name' type='text' placeholder='name' onChange={handleChange} /><br />


                <label for='status'>Status</label>
                <input name='status' id='status' type='text' placeholder='status' onChange={handleChange} /><br />

                <label for='species'>Species</label>
                <input name='species' id='species' type='text' placeholder='species' onChange={handleChange} /><br />


                <label for='image'>Image</label>
                <input name='image' id='image' type='text' placeholder='image' onChange={handleChange} /><br />


                <button type='submit'>Submit Character</button>

            </form>
        </div>
    )
}
export default AddCharacterForm;