import React from 'react'
import BlogPost from './BlogPost'

function BlogList(props){
    const posts = props.posts.map(post => <BlogPost {...post} key = {Math.random()} />);


    return (
        <div className = 'BlogList'>
            {posts}
        </div>
    )
}

export default BlogList