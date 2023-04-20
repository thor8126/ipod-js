import "./App.css";
import React, { useState } from "react";
import UpperBody from "./components/Body/UpperBody";
import LowerBody from "./components/Body/LowerBody";

function App(props) {
  const [showMenu, setShowMenu] = useState(true);

  const [active, setActive] = useState(0);

  const [activeWindow, setActiveWindow] =useState('coverflow');
  
  // console.log('menu ',showMenu)
  // console.log(window)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSetActive = (index) => {
    if (showMenu) {
      setActive(index);
    }
  };

  return (
    <>
      <div className="main">
        <UpperBody showMenu={showMenu} active={active} activeWindow={activeWindow} setActiveWindow={setActiveWindow} />
        <LowerBody
          toggleMenu={toggleMenu}
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          setActive={handleSetActive}
          active={active}
          setActiveWindow={setActiveWindow}
          activeWindow={activeWindow}
        />
      </div>
    </>
  );
}

export default App;
