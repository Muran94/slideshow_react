import React from 'react';

function Thumbnail(props) {
  return (
    <img
      className={`thumbnail ${props.currentImageIndex === props.index ? 'thumbnail--current' : ''}`}
      src={props.image}
      alt={`img${props.index}`}
      onClick={() => props.changeImage(props.index)}
    />
  )
}

export default Thumbnail;
