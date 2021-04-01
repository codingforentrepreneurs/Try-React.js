import React, {useContext, useState} from 'react'

const defaultContextData = {
    isDark: false,
    abc: 123,
    toggle: () => {}
}

export const DarkModeContext = React.createContext(defaultContextData)
export const useDarkMode = () => useContext(DarkModeContext)

export const DarkModeProvider = props => {
    const [isDark, setIsDark] = useState(false)

    const toggle = () => {
        setIsDark(!isDark)
    }
    return <DarkModeContext.Provider value={{
        isDark: isDark,
        abc: 123,
        toggle: toggle,
    }}>
        {props.children}
    </DarkModeContext.Provider>
}