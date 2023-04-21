import React, { useState ,useRef, useEffect } from 'react';
import './music.css';
import music1 from '../../assets/Calm Down with Selena Gomez.mp3';
import music2 from '../../assets/Faded - Alan Walker.mp3';
import music3 from '../../assets/golden hour - JVKE.mp3';
import music4 from '../../assets/lovely with Khalid - Billie Eilish.mp3';
import music5 from '../../assets/Perfect - Ed Sheeran.mp3';
import music6 from '../../assets/Starboy - The Weeknd.mp3';

function Music(props) {
  const data=
    [
      {
      id: 1,
      title: 'Rema, Selena Gomez - Calm Down (Official Music Video)',
      artist: 'SelenaGomezVEVO',
      album: 'Rema, Selena Gomez - Calm Down (Official Music Video)',
      duration: '3:59',
      image: 'https://grungecake.com/wp-content/uploads/2022/08/rema-calm-down-remix-selena-gomez-grungecake-thumbnail-1024x1024.jpg',
      url: music1,
    },
    {
      id: 2,
      title: 'Faded - Alan Walker',
      artist: 'Alan Walker',
      album: 'Faded - Alan Walker',
      duration: '3:32',
      image: 'https://leosigh.com/wp-content/uploads/2016/03/alan-walker-faded-cover-art.jpg',
      url: music2,
    },
    {
      id: 3,
      title: 'golden hour - JVKE',
      artist: 'JVKE',
      album: 'golden hour - JVKE',
      duration: '3:29',
      image: 'https://i.scdn.co/image/ab67616d0000b273134d5ec418af466391502905',
      url: music3,
    },
    {
      id: 4,
      title: 'lovely (with Khalid) - Billie Eilish',
      artist: 'Billie Eilish',
      album: 'lovely (with Khalid) - Billie Eilish',
      duration: '3:19',
      image: 'https://lastfm.freetls.fastly.net/i/u/770x0/d14b594f15b5629a3ba686cab2c95f83.jpg#d14b594f15b5629a3ba686cab2c95f83',
      url: music4,
    },
    {
      id: 5,
      title: 'Perfect - Ed Sheeran',
      artist: 'Ed Sheeran',
      album: 'Perfect - Ed Sheeran',
      duration: '4:21',
      image: 'https://i.pinimg.com/564x/86/62/11/866211be5c328632afbf53490477206c.jpg',
      url: music5,
    },
    {
      id: 6,
      title:'Starboy - The Weeknd',
      artist: 'The Weeknd',
      album: 'Starboy - The Weeknd',
      duration: '3:50',
      image: 'https://i.pinimg.com/564x/ce/b8/63/ceb8633ef1c08718f2648ce174f0249e.jpg',
      url: music6,
    },
  ]
  const { current } = props;
  const audioRef = useRef(null);
  const [inputValue, setInputValue] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleSlider = () => {
    const currentTime = parseInt(inputValue) / 100 * audioRef.current.duration;
    audioRef.current.currentTime = currentTime;
  };
  

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    const progress = Math.floor((currentTime / duration) * 100);
    setInputValue(progress);
    setCurrentTime(currentTime);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(audioRef.current.currentTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const progressStyle = {
    background: `linear-gradient(to right, blue, blue ${inputValue}%, #d3d3d3 ${inputValue}%, #d3d3d3)`
  };


  return (
    <div className='music'>
      <div className='left'>
        <audio
          className='audio'
          ref={audioRef}
          src={data[current].url}
          controls
          autoPlay
          onTimeUpdate={handleTimeUpdate}
        ></audio>
      </div>
      <div className='right'>
        <div className='inside'>
          <img src={data[current].image} alt='music' />
          <div className='name'>
            <h4>{data[current].title}</h4>
            <p>{data[current].artist}</p>
          </div>
        </div>
        <div className='slider' >
          <div className='slider-progress'>
            <span>{formatTime(audioRef.current?.currentTime)}</span>&nbsp;
            <input
              type='range'
              min='0'
              max='100'
              value={inputValue}
              step='1'
              onChange={(e) => setInputValue(parseInt(e.target.value))}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => {
                setIsDragging(false);
                handleSlider();
              }}
              style={progressStyle}
            />
            &nbsp;
            <span>{data[current].duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;