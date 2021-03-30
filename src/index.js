import React from 'react';
import ReactDOM from 'react-dom';


const appEl = document.getElementById('cfe')

const App = props => {
    // jsx
    return <h1>Hello World</h1>
}

ReactDOM.render(<App />, appEl)


const cfe2El = document.getElementById('cfe2')

const CFE2 = props => {
    // jsx
    return <h1>CFE2</h1>
}

if (cfe2El) {
    ReactDOM.render(<CFE2 />, cfe2El)
}
