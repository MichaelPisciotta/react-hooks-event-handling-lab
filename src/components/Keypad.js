import React from 'react';


function handlePassword(){
    return(
        console.log('Entering password...')
    )
}

function Keypad(){
    return(
<input type="password" onChange={handlePassword} ></input>
    )
}

export default Keypad;