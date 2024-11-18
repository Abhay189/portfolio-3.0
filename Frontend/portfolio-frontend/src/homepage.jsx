import React, { useState, useEffect } from "react";
import dummyArt from './assets/dummy-art.png';
import dummySelfImage from './assets/dummy-self-image.png';
import profilePic from './assets/linkedin-profile-pic.jpg';
import './Styles/App.css'
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";

function Homepage() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/Animation - 1731908264485.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation data:", error));
  }, []);

  return (
    <>
      <div className="homepage flex-container-row">
        <div className="homepage-intro-section flex-container-col">
          <div className="lottie-container">
            {animationData ? (
              <Lottie animationData={animationData} loop={true} style={{ height:"700px", width:"auto" }}/>
            ) : (
              <img src={dummyArt} alt="Art image" />
            )}
          </div>
          <div className="homepage-title-section">
            <h3>I AM A</h3>
            <hr />
            <div className="homepage-title-inner-section">
            <h1>
              <span className="typewriter-text">
                <Typewriter
                  options={{
                    strings: ["Software Developer", "Front-End Developer", "Back-End Developer"],
                    autoStart: true,
                    loop: true,
                    delay: 150, // Delay between keystrokes
                  }}
                />
              </span>
            </h1>
            </div>
          </div>
        </div>
        <div className="homepage-img-section flex-container-col">
          <img className='profile-pic' src={profilePic} alt="Self image" />
        </div>
      </div>
    </>
  );
}

export default Homepage