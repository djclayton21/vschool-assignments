import React from 'react'
import BlogPost from './BlogPost'

function BlogList(props){
    const posts = props.posts.map(post => <BlogPost {...post} key = {Math.random()} />);


    return (
        <div className = 'blog-list'>
            {posts}
            <a className = 'older-posts'href = '#top'>Older Posts &rarr;</a>
        </div>
    )
}

export default BlogList