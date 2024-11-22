"use client";
import React, { useRef, useState } from "react";

import { FiPlay } from "react-icons/fi";

import { RxPause } from "react-icons/rx";

const VideoCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/5 relative ">
      <video ref={videoRef} loop muted className="rounded-lg">
        <source
          src="https://videos.pexels.com/video-files/7656172/7656172-sd_360_640_25fps.mp4"
          type="video/mp4"
        />
      </video>

      <button
        onClick={handlePlay}
        className="absolute top-0 left-0   flex items-center
      justify-center inset-0 text-xl 
      "
      >
        {isPlaying ? <RxPause /> : <FiPlay />}
      </button>
    </div>
  );
};

export default VideoCard;
