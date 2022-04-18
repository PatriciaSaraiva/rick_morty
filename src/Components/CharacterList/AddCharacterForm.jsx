import React, { useState } from 'react';


function AddCharacterForm(props) {
    // const { name, setName } = useState('')
    // const { status, setStatus } = useState('')
    // const { image, setImage } = useState('')
    const [state, setState] = useState(
        {
            name: '',
            status: '',
            image: '',
        }
    )
    const handleChange = (e) => {
        const newValue = e.target.value
        const newName = e.target.name
        setState({ [newName]: newValue })
    }

    const { addNewCharacter } = props
    return (
        <div>
            <form onSubmit={(e) => { addNewCharacter(e) }}>

                <label for='name'>Name</label>
                <input name='name' id='name' type='text' placeholder='name' onChange={handleChange} /><br />


                <label for='status'>Status</label>
                <input name='status' id='status' type='text' placeholder='status' onChange={handleChange} /><br />


                <label for='image'>Image</label>
                <input name='image' id='image' type='text' placeholder='image' onChange={handleChange} /><br />


                <button type='submit'>Submit Character</button>

            </form>
        </div>
    )
}
export default AddCharacterForm;