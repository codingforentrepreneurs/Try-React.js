import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './App'

const appEl = document.getElementById('cfe')

function Index () {
    return <div>
        <abc />
    </div>
}
ReactDOM.render(<App />, appEl)