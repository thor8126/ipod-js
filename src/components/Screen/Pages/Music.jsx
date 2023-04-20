import React, { useState, useRef } from 'react';
import './music.css';

function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleProgressClick = (e) => {
    const progressBar = e.target;
    const clickedTime = (e.offsetX / progressBar.offsetWidth) * audioRef.current.duration;
    audioRef.current.currentTime = clickedTime;
  };

  return (
    <div className='music'>
      <div className='left'>
        <button className='play-pause-btn' onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <div className='track-title'>Track Title</div>
      </div>
      <div className='right'>
        <audio
          ref={audioRef}
        //   src='path/to/audio/file.mp3'
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        />
        <div className='progress-bar' onClick={handleProgressClick}>
          <div className='progress-bar-fill' style={{ width: `${(currentTime / audioRef.current?.duration) * 100}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default Music;
