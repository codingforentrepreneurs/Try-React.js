import React from 'react';

class MyComp extends React.Component {

    render () {
        return <h1>Hello World</h1>
    }
}


const Arrow = () => {

    return <p>I'm an arrow</p>
}

export default function App () {

    return <div>
        <MyComp />
        <Arrow />
    </div>
}
