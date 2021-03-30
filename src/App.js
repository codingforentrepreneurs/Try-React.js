import React, {useState} from 'react';

const App = () => {
    const [myCurrentCount, setCurrentCount] = useState(1)
    const handleClick = (event) =>{
        console.log(event)
        setCurrentCount(myCurrentCount + 1)
        console.log(myCurrentCount)
    }
    return <div>
        <h1>Hello World</h1>
        <button onClick={handleClick}>Like {myCurrentCount}</button>
    </div>
}

export default App