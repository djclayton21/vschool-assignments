import React from 'react'

function BlogPost({author, date, subTitle, title}){

    return (
        <main className = 'blog-post'>
            <a href= '#top'>
                <h3>{title}</h3>
                <h4>{subTitle}</h4>
            </a>
            <span>Posted by <a href = '#top'>{author}</a> on <time>{date}</time></span>
        </main>
    )
}

export default BlogPost