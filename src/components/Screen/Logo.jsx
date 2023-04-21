import React from 'react'
import './style.css'

function Logo(props) {
    const { active } = props

    const closeSidebar = () => {
        props.toggleMenu()
    }
  return (
    <div className='container' onClick={closeSidebar}>
        {active === 0 && <div>Home</div>}
        {active === 1 && <div>Music</div>}
        {active === 2 && <div>Games</div>}
        {active === 3 && <div>Settings</div>}
    </div>
  )
}

export default Logo