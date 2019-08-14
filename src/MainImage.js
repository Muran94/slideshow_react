import React from 'react';

function MainImage(props) {
  return (
    <section className="main-image-container">
      <img src={props.image} alt="Main"/>
    </section>
  )
}

export default MainImage;
