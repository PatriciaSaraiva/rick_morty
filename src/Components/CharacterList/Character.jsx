import React from 'react'

function Character(props){
    const {image, name, species} = props;
    return(
        <div className='card'>
            
            <img src={image} atl={`This is ${name}`}/>
            <h2>{name}</h2>
            <h3>{species}</h3>
        </div>
    )
}



export default Character