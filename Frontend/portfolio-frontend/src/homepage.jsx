import React from 'react';
import dummyArt from './assets/dummy-art.png';
import dummySelfImage from './assets/dummy-self-image.png';
import './Styles/App.css'

function Homepage() {
  return (
    <>
      <div className="homepage flex-container-row">
        <div className="homepage-intro-section flex-container-col">
          <div className="homepage-art-section">
            <img src={dummyArt} alt="Art image" />
          </div>
          <div className="homepage-title-section">
            <h3>I AM A</h3>
            <hr />
            <div className="homepage-title-inner-section">
              <h1>Software Developer</h1>
            </div>
          </div>
        </div>
        <div className="homepage-img-section flex-container-col">
          <img src={dummySelfImage} alt="Self image" />
        </div>
      </div>
    </>
  );
}

export default Homepage