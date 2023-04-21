import React from 'react'
import './body.css'
import Display from '../Screen/Display';

function UpperBody(props) {
  const { active } = props
  return (
    <div className="upper">
      <Display showMenu={props.showMenu} active={active} setActive={props.setActive} activeWindow={props.activeWindow} toggleMenu={props.toggleMenu}/>
    </div>
  );
}

export default UpperBody;