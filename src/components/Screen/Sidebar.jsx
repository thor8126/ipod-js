import React from 'react'
import './sidebar.css'

function Sidebar(props) {
  const { active } = props

  return (
    <div className='sidebar'>
      <div className="sidebar-items">
            <div className={`sidebar-item ${active === 0 ? 'active' : ''}`}>
              <i className="fa-solid fa-photo-film"></i>
              <span>CoverFlow</span>
            </div>
            <div className={`sidebar-item ${active === 1 ? 'active' : ''}`}>
              <i className="fa-solid fa-music"></i>
              <span>Music</span>
            </div>

            <div className={`sidebar-item ${active === 2 ? 'active' : ''}`}>
              <i className="fa-solid fa-gamepad"></i>
              <span>Games</span>
            </div>
            <div className={`sidebar-item ${active === 3 ? 'active' : ''}`}>
              <i className="fa-solid fa-gear"></i>
              <span>Settings</span>
            </div>
      </div>
    </div>
  )
}

export default Sidebar
