import React from 'react';


import {LikeBtn} from './buttons/likeBtn'
import {useDarkMode} from './darkMode/context'

import {DarkModeBtn} from './darkMode/button'
import {useCountdown} from './hooks/useCountdown'
import {ContactForm} from './contactForm/contactForm'

const App = () => {
    const currentTime = useCountdown(2)
    const darkModeContext = useDarkMode()
    const isDark = darkModeContext.isDark
    const wrapperClassName = isDark ? 'bg-dark text-light' : 'bg-light text-dark'

    return <div className={wrapperClassName}>
        <h1>Hello World {isDark? 'dark': 'light'}</h1>
        <p>Your time is {currentTime}</p>
        <LikeBtn className='text-red'>Like</LikeBtn>
        <DarkModeBtn />

        <ContactForm />
    </div>
   
}

export default App