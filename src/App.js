import React from 'react';

import {LikeBtn} from './buttons/likeBtn'


const App = () => {
    return <div id='my-app-div' className='text-red another-class'>
        <h1>Hello World</h1>
        <LikeBtn className='text-red' initCount={5001} />

        <LikeBtn className='text-red' initCount={1} />

        <LikeBtn className='text-red' initCount={51} />
    </div>
}

export default App