import "./App.css";
import React, { useState } from "react";
import UpperBody from "./components/Body/UpperBody";
import LowerBody from "./components/Body/LowerBody";

function App(props) {

  const list =[0,1,2,3,4,5]

  const [showMenu, setShowMenu] = useState(true);

  const [active, setActive] = useState(0);

  const [activeWindow, setActiveWindow] =useState('coverflow');

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSetActive = (index) => {
    if (showMenu) {
      setActive(index);
    }
  };

  const [current, setCurrent] = useState(0);

  return (
    <>
      <div className="main">
        <UpperBody 
        showMenu={showMenu} 
        active={active} 
        activeWindow={activeWindow} 
        setActiveWindow={setActiveWindow} 
        toggleMenu = {toggleMenu}
        list={list}
        current={current}
        setCurrent={setCurrent}
        />

        <LowerBody
          toggleMenu={toggleMenu}
          setShowMenu={setShowMenu}
          showMenu={showMenu}
          setActive={handleSetActive}
          active={active}
          setActiveWindow={setActiveWindow}
          activeWindow={activeWindow}
          list={list}
          current={current}
          setCurrent={setCurrent}
        />
      </div>
    </>
  );
}

export default App;
