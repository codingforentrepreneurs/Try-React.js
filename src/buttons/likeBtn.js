import React, {useState} from 'react';

export const LikeBtn = () => {
    const [count, setCount] = useState(1)
    const handleClick = (event) =>{
        // send to my server

        // from server
        setCount(count + 1)
    }
    return <button onClick={handleClick}>Like {count}</button>
}
