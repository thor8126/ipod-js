import React, { useEffect } from 'react'
import './buttons.css'
import ZingTouch from 'zingtouch'
import Sidebar from '../Screen/Sidebar'


function Buttons() {

  const rotate = (e) => {
    const container = document.querySelector('.ipod-controller__circle')
    const region = new ZingTouch.Region(container)
    region.bind(container, 'rotate', (e) => {
      console.log(e.detail.distanceFromLast)
    })
  }
  const handleMenuClick = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.classList.toggle('open')
  }

  

  useEffect(() => {
    rotate()
  }, [])

  return (
    <>
      <div className="ipod-controller">
        <div className="ipod-controller__menu" onClick={handleMenuClick}>
          <i class="fa-solid fa-bars"></i>
        </div>

        <div className="ipod-controller__next" >
          <i class="fa-solid fa-forward"></i>
        </div>

        <div className="ipod-controller__back" >
          <i class="fa-solid fa-backward"></i>
        </div>

        <div className="ipod-controller__play-pause" >
        <i class="fa-solid fa-backward"></i>
        </div>

        <div className="ipod-controller__circle" >
                </div>
      </div>
    </>
  )
}

export default Buttons