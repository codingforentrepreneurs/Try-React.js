import React, {useEffect, useState} from 'react';

export const LikeBtn = ({initCount, onCountUpdate, ...otherProps}) => {
    
    const [count, setCount] = useState(null)
    console.log('LikeBtn', otherProps, count, initCount)
 
    useEffect(()=>{
        setCount(initCount)
    }, [initCount])

    const handleClick = (event) =>{
        // send to my server

        // from server
        const newCount = count + 1
        setCount(newCount)
        if (onCountUpdate){
            onCountUpdate(newCount)
        }
    }
    return <button className={otherProps.className} onClick={handleClick}>Like {count}</button>
}
