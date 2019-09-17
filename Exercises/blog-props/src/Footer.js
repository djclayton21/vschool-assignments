import React from 'react'

function Footer(){

    return (
        <div className = 'footer'>
            <div className = 'social-links'>
                <a href= '#top'><i className = 'fab fa-twitter fa-lg'></i></a>
                <a href= '#top'><i className = 'fab fa-facebook fa-lg'></i></a>
                <a href= '#top'><i className = 'fab fa-github fa-lg'></i></a>
            </div>
            <div className = 'copyright'>Copyright &copy; Your Website 2019</div>
        </div>
    )
}

export default Footer