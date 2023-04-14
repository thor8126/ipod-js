import React from 'react'
import './display.css'
import Sidebar from './Sidebar'

function Display(props) {
  // getState from props
  const { showMenu } = props
  
  return (
    <>
        <div className="display">
            <div className="navbar">
              <div className="left-nav">
                    <i className="fas fa-bars"></i>
                    <i className="fas fa-search"></i>
              </div>
              <div className="right-nav">
                    <i className="fas fa-bell"></i>
                    <i className="fas fa-user"></i>
                </div>
            </div>

            <div className="content">
                {showMenu && <Sidebar active={props.active} setActive={props.setActive}/>}
              </div>
        </div>                
    </>
  )
}

export default Display