import React from 'react';

const Photo = (props) => {
    const { caption, imgUrl } = props;
    return (
        <div className="photo">
            <img src={imgUrl} alt={caption}/>
            <h5>{caption}</h5>
        </div>
    );
}
 
export default Photo;