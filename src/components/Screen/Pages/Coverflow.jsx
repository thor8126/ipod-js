import React, { useState, useEffect } from 'react';
import './coverflow.css';

function Coverflow() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hour12 = hours % 12 || 12;
  const dayOfWeek = time.toLocaleDateString(undefined, { weekday: 'long' });
  const month = time.toLocaleDateString(undefined, { month: 'long' });
  const day = time.getDate();
  const year = time.getFullYear();

  return (
    <div className='coverflow'>
      <div className='digital-clock'>
        <div className='time'>&nbsp;&nbsp;{hour12}:{minutes} {ampm}</div>
        <div className='date'>{dayOfWeek}, {month} {day}, {year}</div>
      </div>
    </div>
  );
}

export default Coverflow;
