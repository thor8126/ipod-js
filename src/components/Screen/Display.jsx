import React from 'react'
import './display.css'
import Sidebar from './Sidebar'
import Logo from './Logo'
import Music from './Pages/Music'
import Coverflow from './Pages/Coverflow'
import Settings from './Pages/Settings'
import Games from './Pages/Games'


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
                {(props.active === 1 && showMenu==true) && <Logo active={props.active} toggleMenu={props.toggleMenu}/>}
                {(props.active === 0 && showMenu==true) && <Logo active={props.active} toggleMenu={props.toggleMenu}/>}
                {(props.active === 2 && showMenu==true) && <Logo active={props.active} toggleMenu={props.toggleMenu}/>}
                {(props.active === 3 && showMenu==true) && <Logo active={props.active} toggleMenu={props.toggleMenu}/>}

                {showMenu && <Sidebar active={props.active}/>}

                { props.activeWindow ==='coverflow' && <Coverflow/> }
                { props.activeWindow ==='music' && <Music/> }
                { props.activeWindow ==='settings' && <Settings/> }
                { props.activeWindow ==='games' && <Games/> }

            </div>
        </div>                
    </>
  )
}

export default Display