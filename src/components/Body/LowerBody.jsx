import React from 'react'
import './body.css'
import Buttons from '../Controls/Buttons'

function LowerBody(props) {
  return (
    <div className="lower">
       <Buttons toggleMenu={props.toggleMenu}/>
    </div>
  )
}

export default LowerBody