import React from 'react';
import classnames from 'classnames';
import {Switch, Route, Link} from 'react-router-dom'

import {LikeBtn} from './buttons/likeBtn'
import {useDarkMode} from './darkMode/context'

import {DarkModeBtn} from './darkMode/button'
import {useCountdown} from './hooks/useCountdown'
import {BlogListPage, BlogDetailPage} from './blog/blogDetail'
import {ContactPage} from './contactForm/contactPage'

import './styles/custom.scss'

const Home = ({currentTime}) => {    
    const darkModeContext = useDarkMode()
    const isDark = darkModeContext.isDark
    const headerClassName = classnames('bold', {'text-green': currentTime >= 3, 'text-red': currentTime<3})
    return <div>
        <h1 className={headerClassName}>Hello World {isDark? 'dark': 'light'}</h1>
                <p>Your time is {currentTime}</p>
                <LikeBtn className='text-red'>Like</LikeBtn>
                <DarkModeBtn />
    </div>
    
}


const App = () => {
    const [currentTime ]= useCountdown(5)
    const darkModeContext = useDarkMode()
    const isDark = darkModeContext.isDark
    const wrapperClassName = isDark ? 'bg-dark text-light' : 'bg-light text-dark'

    return <div className={wrapperClassName}>
        <nav>
            <ul>

                <li><Link to='/'>Home</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/blog/random'>Blog Random</Link></li>
                <li><Link to='/blog/hello-world'>Blog Hello World</Link></li>
            </ul>
        </nav>

        <Switch>
            <Route exact path='/'>
                <Home currentTime={currentTime }/>
            </Route>
            <Route exact path='/blog'>
                <BlogListPage />
            </Route>
            <Route exact path='/blog/:slug'>
                <BlogDetailPage />
            </Route>
            <Route exact path='/contact'>
                <h1>Contact Form</h1>
                <ContactPage />
            </Route>
        </Switch>

        
    </div>
   
}

export default App