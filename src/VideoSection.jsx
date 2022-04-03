import React from "react";

const VideoSection = () => {
  return (
    <>
      <div className="video-section">
        <h1>WELCOME TO YOUR GATEWAY FOR DIGITAL CURRENCY</h1>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/d8IBpfs9bf4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default VideoSection;
