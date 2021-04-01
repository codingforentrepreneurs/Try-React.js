import React, {useEffect, useState} from 'react';

export const useTempLabel = (myLabel, tempLabel, duration) => {
    const tempDuration = duration ? duration : 1500
    const defaultLabel = myLabel ? myLabel : 'Like'
    const defaultTempLabel = tempLabel ? tempLabel : "Liked"
    const [label, setLabel] = useState(defaultLabel)
    useEffect(()=>{
        let timeout;
        if (label !== defaultLabel) {
            timeout = setTimeout(()=>{
                setLabel(defaultLabel)
            }, tempDuration)
        }
        return () => {
            clearTimeout(timeout)
        }
    }, [label])

    const toggle = () =>{
        setLabel(defaultTempLabel)
    }
    return [label, toggle]
}
