import React from 'react'
import './body.css'
import Buttons from '../Controls/Buttons'

function LowerBody(props) {
  return (
    <div className="lower">
       <Buttons toggleMenu={props.toggleMenu} active={props.active} setActive={props.setActive} showMenu={props.showMenu} />
    </div>
  )
}

export default LowerBody