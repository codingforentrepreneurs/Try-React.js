import React, {useState} from 'react';

export const LikeBtn = (props) => {
    console.log('LikeBtn', props)
    const [count, setCount] = useState(props.initCount ? props.initCount : 0)
    const handleClick = (event) =>{
        // send to my server

        // from server
        setCount(count + 1)
    }
    return <button className={props.className} onClick={handleClick}>Like {count}</button>
}
