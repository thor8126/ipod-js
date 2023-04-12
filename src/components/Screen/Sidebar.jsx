import React from 'react'
import './sidebar.css'

function Sidebar(props) {
  const handleItemClick = (e) => {
    props.onItemClick(e)
  }

  return (
    <div className='sidebar'>
      <div className="sidebar-items">
        <div className="sidebar-item" onClick={handleItemClick}>
          <i class="fa-solid fa-photo-film"></i>
          <span>CoverFlow</span>
        </div>
        <div className="sidebar-item" onClick={handleItemClick}>
          <i class="fa-solid fa-music"></i>
          <span>Music</span>
        </div>
        <div className="sidebar-item" onClick={handleItemClick}>
          <i class="fa-solid fa-gamepad"></i>
          <span>Games</span>
        </div>
        <div className="sidebar-item" onClick={handleItemClick}>
          <i class="fa-solid fa-gear"></i>
          <span>Settings</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
