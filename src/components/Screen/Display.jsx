import React from 'react'
import './display.css'
import Sidebar from './Sidebar'
import Logo from './Pages/Logo'


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
                {(props.active === 0 && showMenu==true) && <Logo active={props.active}/>}
                {(props.active === 1 && showMenu==true) && <Logo active={props.active}/>}
                {(props.active === 2 && showMenu==true) && <Logo active={props.active}/>}
                {(props.active === 3 && showMenu==true) && <Logo active={props.active}/>}

                {showMenu && <Sidebar active={props.active}/>}

                
            </div>
        </div>                
    </>
  )
}

export default Display