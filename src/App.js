import React from 'react';

const App = () => {

    const handleClick = (event) =>{
        console.log(event)
    }    
    return <div>
        <h1>Hello World</h1>
        <button onClick={handleClick}>Like</button>
    </div>
}

export default App