import React from 'react'
import './buttons.css'

function Buttons() {
  return (
    <>
      <div className="ipod-controller">
        <div className="ipod-controller__menu" >
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