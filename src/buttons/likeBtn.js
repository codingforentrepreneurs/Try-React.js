import React, {useEffect, useState} from 'react';

export const LikeBtn = (props) => {
    console.log('LikeBtn', props)
    const [count, setCount] = useState(null)
    
    useEffect(()=>{
        setCount(props.initCount)
    }, [props.initCount])
    
    
    const handleClick = (event) =>{
        // send to my server

        // from server
        setCount(count + 1)
    }
    return <button className={props.className} onClick={handleClick}>Like {count}</button>
}
