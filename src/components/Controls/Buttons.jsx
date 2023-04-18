import React, { useEffect } from 'react'
import './buttons.css'


function Buttons(props) {
  const { setActive, active, showMenu , toggleMenu } = props

  const rotate = () => {
    const container = document.querySelector('.ipod-controller');
    let isRotating = false;
    let initialAngle;
    let values = [0, 1, 2, 3];
    let activeIndex = 0;
    let direction = 1; // 1 for clockwise, -1 for anti-clockwise
  
    const updateActive = (direction) => {
      activeIndex += direction;
      if (activeIndex >= values.length) {
        activeIndex = 0;
      } else if (activeIndex < 0) {
        activeIndex = values.length - 1;
      }
      setActive(values[activeIndex]);
    }
  
    const handleMouseMove = (e) => {
      if (isRotating) {
        const { top, left, width, height } = container.getBoundingClientRect();
        const center = {
          x: left + width / 2,
          y: top + height / 2
        };
        const currentAngle = Math.atan2(e.clientY - center.y, e.clientX - center.x) * 180 / Math.PI;
        const angleDiff = currentAngle - initialAngle;
        if (angleDiff > 45 && angleDiff < 135) {
          updateActive(direction);
          initialAngle = currentAngle;
        } else if (angleDiff < -45 && angleDiff > -135) {
          updateActive(-direction);
          initialAngle = currentAngle;
        }
      }
    }
  
    const handleMouseDown = (e) => {
      const { top, left, width, height } = container.getBoundingClientRect();
      const center = {
        x: left + width / 2,
        y: top + height / 2
      };
      initialAngle = Math.atan2(e.clientY - center.y, e.clientX - center.x) * 180 / Math.PI;
      isRotating = true;
    }
  
    const handleMouseUp = () => {
      isRotating = false;
    }
  
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
  };
  
  useEffect(() => {
      rotate();
  },[]);
  
  // make buttons non draggable
  const handleDragStart = (e) => {
    e.preventDefault();
  }

  const openWindow = () => {
    if (active === 0) {
      console.log('home');
      toggleMenu();
    } else if (active === 1) {
      console.log('music');
      toggleMenu();
    } else if (active === 2) {
      console.log('games');
      toggleMenu();
    } else if (active === 3) {
      console.log('settings');
      toggleMenu();
    }
  }

  return (
    <>
      <div className="ipod-controller" onDragStart={handleDragStart}>
        
        <div className="ipod-controller__menu" onClick={props.toggleMenu}>
          <i className="fa-solid fa-bars clr-grey"></i>
        </div>

        <div className="ipod-controller__next" >
          <i className="fa-solid fa-forward clr-grey"></i>
        </div>

        <div className="ipod-controller__back" >
          <i className="fa-solid fa-backward clr-grey"></i>
        </div>

        <div className="ipod-controller__play-pause" >
        <i className="fa-solid fa-pause clr-grey"></i>
        </div>

        <div className="ipod-controller__circle" onClick={openWindow}>
        </div>

      </div>
    </>
  )
}

export default Buttons