import React from 'react'
import './page.css'

function Logo(props) {
    const { active } = props
  return (
    <div className='page'>
        {active === 0 && <div>Home</div>}
        {active === 1 && <div>Music</div>}
        {active === 2 && <div>Games</div>}
        {active === 3 && <div>Settings</div>}
    </div>
  )
}

export default Logo