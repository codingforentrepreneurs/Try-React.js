import React, {useEffect, useState} from 'react';
const Amp = () => <span>&amp;</span>

export const LikeBtn = ({initCount, onCountUpdate, ...otherProps}) => {
    const defaultLabel = otherProps.children ? otherProps.children : 'Like'
    const [count, setCount] = useState(initCount ? initCount : 0)
    const [label, setLabel] = useState(defaultLabel)
    console.log('LikeBtn', otherProps, count, initCount)
 
    useEffect(()=>{
        if (count < initCount) {
            setLabel("Liked")
            setCount(initCount)
        }
    }, [initCount])

    useEffect(()=>{
        let timeout;
        if (label !== defaultLabel) {
            timeout = setTimeout(()=>{
                setLabel(defaultLabel)
            }, 1500)
        }
        return () => {
            clearTimeout(timeout)
        }
    }, [label])

    const handleClick = (event) =>{
        // send to my server

        // from server
        setLabel("Liked")
        const newCount = count + 1
        setCount(newCount)
        if (onCountUpdate){
            onCountUpdate(newCount)
        }
    }
    return <button className={otherProps.className} onClick={handleClick}>
        
        {label} {count}</button>
}