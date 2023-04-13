import React, { useEffect } from 'react'
import './buttons.css'
import ZingTouch from 'zingtouch'


function Buttons(props) {

  const rotate = (e) => {
    const container = document.querySelector('.ipod-controller')
    const region = new ZingTouch.Region(container)
    region.bind(container, 'rotate', (e) => {
      console.log(e.detail.distanceFromLast)
    })
  }

  useEffect(() => {
    rotate()
  }, [])

  return (
    <>
      <div className="ipod-controller">
        <div className="ipod-controller__menu" onClick={props.toggleMenu}>
          <i class="fa-solid fa-bars clr-grey"></i>
        </div>

        <div className="ipod-controller__next" >
          <i class="fa-solid fa-forward clr-grey"></i>
        </div>

        <div className="ipod-controller__back" >
          <i class="fa-solid fa-backward clr-grey"></i>
        </div>

        <div className="ipod-controller__play-pause" >
        <i class="fa-solid fa-pause clr-grey"></i>
        </div>

        <div className="ipod-controller__circle" onClick={rotate}>
        </div>

      </div>
    </>
  )
}

export default Buttons