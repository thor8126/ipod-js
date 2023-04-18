import "./App.css";
import React, { useState } from "react";
import UpperBody from "./components/Body/UpperBody";
import LowerBody from "./components/Body/LowerBody";

function App(props) {
  const [showMenu, setShowMenu] = useState(true);

  const [active, setActive] = useState(0);

  const [window, setWindow] =useState(false);
  
  console.log(showMenu)

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
        <UpperBody showMenu={showMenu} active={active} />
        <LowerBody
          toggleMenu={toggleMenu}
          showMenu={showMenu}
          setActive={handleSetActive}
          active={active}
        />
      </div>
    </>
  );
}

export default App;
