import React from 'react'
import BlogPost from './BlogPost'

function BlogList(props){
    const posts = props.posts.map(post => <BlogPost {...post} key = {Math.random()} />);


    return (
        <div className = 'BlogList'>
            {posts}
            <a href = '#top'>Older Posts -></a>
        </div>
    )
}

export default BlogList