import React, { useEffect } from 'react'
import './buttons.css'
import ZingTouch from 'zingtouch'


function Buttons(props) {

  const { setActive } = props
 
  const rotate = () => {
    const container = document.querySelector('.ipod-controller')
    const region = new ZingTouch.Region(container)

    region.bind(container, 'rotate', (e) => {
      const clockwise = e.detail.distanceFromLast > 0

      if (Math.abs(e.detail.distanceFromOrigin) < 30) {
        return
      }

      if (clockwise) {
        setActive((active + 1) % 4)
      } else {
        setActive((active - 1 + 4) % 4)
      }
    })
  }
  


  useEffect(() => {
    rotate()
  }, [])

  return (
    <>
      <div className="ipod-controller">
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

        <div className="ipod-controller__circle" onClick={rotate}>
        </div>

      </div>
    </>
  )
}

export default Buttons