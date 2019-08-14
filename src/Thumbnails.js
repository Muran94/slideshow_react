import React from 'react';
import Thumbnail from './Thumbnail';

function Thumbnails(props) {
  const thumbnails = props.images.map((image, index) => {
    return (
      <Thumbnail
        key={index}
        currentImageIndex={props.currentImageIndex}
        image={image}
        index={index}
        changeImage={props.changeImage}
      />
    )
  });

  return (
    <nav className="thumbnails">
      {thumbnails}
    </nav>
  )
}

export default Thumbnails;
