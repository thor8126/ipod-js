import "./App.css";
import React,{useState} from "react";
import UpperBody from "./components/Body/UpperBody";
import LowerBody from "./components/Body/LowerBody";

function App(props) {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0)

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="main">
        <UpperBody showMenu={showMenu} active={active} setActive={setActive}/>
        <LowerBody toggleMenu={toggleMenu} showMenu={showMenu} active={active} setActive={setActive}/>
      </div>
    </>
  );
}

export default App;
