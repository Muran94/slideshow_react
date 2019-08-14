import React from 'react';
import MainImage from './MainImage';
import Controller from './Controller';
import Thumbnails from './Thumbnails';
import './App.css';
import pic00 from './img/pic00.png';
import pic01 from './img/pic01.png';
import pic02 from './img/pic02.png';
import pic03 from './img/pic03.png';
import pic04 from './img/pic04.png';
import pic05 from './img/pic05.png';
import pic06 from './img/pic06.png';
import pic07 from './img/pic07.png';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [
        pic00,
        pic01,
        pic02,
        pic03,
        pic04,
        pic05,
        pic06,
        pic07
      ],
      currentImageIndex: 0,
      slideShowIsPlaying: false,
      timeoutId: null
    }
    this.changeImage = this.changeImage.bind(this);
    this.playSlideshow = this.playSlideshow.bind(this);
    this.pauseSlideshow = this.pauseSlideshow.bind(this);
    this.showPrevImage = this.showPrevImage.bind(this);
    this.showNextImage = this.showNextImage.bind(this);
  }

  changeImage(index) {
    this.setState({currentImageIndex: index})
  }

  playSlideshow() {
    let timeoutId = setTimeout(() => {
      this.showNextImage();
      this.playSlideshow();
    }, 1000);
    this.setState({timeoutId: timeoutId, slideShowIsPlaying: true});
  }

  pauseSlideshow() {
    clearTimeout(this.state.timeoutId);
    this.setState({timeoutId: null, slideShowIsPlaying: false});
  }

  showPrevImage() {
    this.setState(prevState => {
      const index = prevState.currentImageIndex === 0 ? (prevState.images.length - 1) : prevState.currentImageIndex - 1;
      return { currentImageIndex: index }
    });
  }

  showNextImage() {
    this.setState(prevState => {
      const index = prevState.currentImageIndex === prevState.images.length - 1 ? 0 : prevState.currentImageIndex + 1;
      return { currentImageIndex: index }
    });
  }

  render() {
    return (
      <div className="container">
        <MainImage
          image={this.state.images[this.state.currentImageIndex]}
        />

        <Controller
          slideShowIsPlaying={this.state.slideShowIsPlaying}
          playSlideshow={this.playSlideshow}
          pauseSlideshow={this.pauseSlideshow}
          showPrevImage={this.showPrevImage}
          showNextImage={this.showNextImage}
        />

        <Thumbnails
          images={this.state.images}
          currentImageIndex={this.state.currentImageIndex}
          changeImage={this.changeImage}
        />
      </div>
    );
  }
}

export default App;
