import React from 'react';


import {LikeBtn} from './buttons/likeBtn'
import {DarkModeProvider, useDarkMode} from './darkMode/context'

import {DarkModeBtn} from './darkMode/button'

const App = () => {
    const darkModeContext = useDarkMode()
    const isDark = darkModeContext.isDark
    const wrapperClassName = isDark ? 'bg-dark text-light' : 'bg-light text-dark'
    
    return <div className={wrapperClassName}>
        <h1>Hello World {isDark? 'dark': 'light'}</h1>
        <LikeBtn className='text-red'>Like</LikeBtn>
        <DarkModeBtn />
    </div>
   
}

export default App