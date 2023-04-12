import React from 'react'
import './display.css'
import Sidebar from './Sidebar'

function Display() {
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
                <Sidebar/>
              </div>
        </div>                
    </>
  )
}

export default Display