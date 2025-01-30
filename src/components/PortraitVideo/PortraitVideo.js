import React from 'react';
import './PortraitVideo.css';

const PortraitVideo = ({ videoSrc }) => {
    console.log(videoSrc)
  return (
    <div className="portrait-video-container" style={{backgroundColor: 'white'}}>cc
      <video 
        className="portrait-video"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src='intro_video.mp4' type='video/mp4'></source>
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default PortraitVideo; 