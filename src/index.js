import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'
import {DarkModeProvider} from './darkMode/context'

const appEl = document.getElementById('cfe')

const RootApp = () => {

    return <DarkModeProvider>
        <App />
    </DarkModeProvider>
}


ReactDOM.render(<RootApp />, appEl)