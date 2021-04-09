import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import App from './App'
import {DarkModeProvider} from './darkMode/context'

const appEl = document.getElementById('cfe')

const RootApp = () => {

    return <Router>
        <DarkModeProvider>
            <App />
        </DarkModeProvider>
    </Router>
}


ReactDOM.render(<RootApp />, appEl)