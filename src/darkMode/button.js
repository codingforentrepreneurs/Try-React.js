import React from 'react'

import {useDarkMode} from './context'

export const DarkModeBtn = props => {
    const darkModeContext = useDarkMode()

    const handleClick = event => {
        darkModeContext.toggle()
    }
    return <button onClick={handleClick}>Toggle {darkModeContext.isDark ? "Dark" : "Light"}</button>
}