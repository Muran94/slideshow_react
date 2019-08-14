import React from 'react';

function Controller(props) {
  return (
    <nav className="controller">
      <div className={`controller__btn controller__btn--wide ${props.slideShowIsPlaying ? 'controller__btn--hidden' : ''}`} onClick={props.playSlideshow}>Play</div>
      <div className={`controller__btn controller__btn--wide ${props.slideShowIsPlaying ? '' : 'controller__btn--hidden'}`} onClick={props.pauseSlideshow}>Pause</div>
      <div className="controller__btn" onClick={props.showPrevImage}>&lt;</div>
      <div className="controller__btn" onClick={props.showNextImage}>&gt;</div>
    </nav>
  )
}

export default Controller;
