import React, {useEffect, useState} from 'react';

import {useTempLabel} from '../hooks/useTempLabel'

const Amp = () => <span>&amp;</span>

export const LikeBtn = ({initCount, onCountUpdate, ...otherProps}) => {
    const defaultLabel = otherProps.children ? otherProps.children : 'Like'
    const [label, toggleLabel] = useTempLabel(defaultLabel, "Liked", 2000)
    const [count, setCount] = useState(initCount ? initCount : 0)
    console.log('LikeBtn', otherProps, count, initCount)
 
    useEffect(()=>{
        if (count < initCount) {
 
            setCount(initCount)
        }
    }, [initCount])

    const handleClick = (event) =>{
        // send to my server

        // from server
        toggleLabel()
        const newCount = count + 1
        setCount(newCount)
        if (onCountUpdate){
            onCountUpdate(newCount)
        }
    }
    return <button className={otherProps.className} onClick={handleClick}>
        
        {label} {count}</button>
}
