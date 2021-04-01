import {useEffect, useState} from 'react';

export const useCountdown = (seconds) => {
    const [currentTime, setCurrentTime] = useState(seconds)

    useEffect(()=>{
        if (currentTime <= 0.1) {
            return;
        }
        let myInterval = setInterval(()=>{
            setCurrentTime(currentTime - 0.1)
        }, 100)

        return () => {
            clearInterval(myInterval)
        }

    }, [currentTime])

    return currentTime
}