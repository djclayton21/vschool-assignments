import React from 'react'

function BlogPost({author, date, subTitle, title}){

    return (
        <div className = 'BlogPost'>
            <a href= '#top'>
                <h3>{title}</h3>
                <h4>{subTitle}</h4>
            </a>
            <span>Posted by <a href = '#top'>{author}</a> on <time>{date}</time></span>
        </div>
    )
}

export default BlogPost