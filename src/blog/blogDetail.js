import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'

export const BlogListPage = () => {

    return <div>
        <h1>Blog list</h1>
        <Link to='/blog/random'>Blog random</Link>
    </div>
}

export const BlogDetailPage = (props) => {
    const {slug} = useParams()
    const [mySlug, setMySlug] = useState(slug)

    useEffect(()=>{
        // fetch backend data
        console.log(slug, mySlug)
        setMySlug(slug)
    }, [slug])

    return <div>
        {mySlug}
        {mySlug  !== "hello-world" ? <Link to='/blog/hello-world'>Hello World</Link> : null}
       
    </div>
}