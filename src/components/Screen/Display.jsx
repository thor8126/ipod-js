import React from 'react'
import './display.css'
import Sidebar from './Sidebar'
import Page from './Pages/Page'
import Music from './Pages/Music'
import Games from './Pages/Games'
import Settings from './Pages/Settings'


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
                {props.active === 1 && <Music/>}
                {props.active === 2 && <Games/>}
                {props.active === 3 && <Settings/>}
                {showMenu && <Sidebar active={props.active}/>}
              </div>
        </div>                
    </>
  )
}

export default Display