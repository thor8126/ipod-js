import "./App.css";
import React,{useState} from "react";
import UpperBody from "./components/Body/UpperBody";
import LowerBody from "./components/Body/LowerBody";

function App(props) {
  const [showMenu, setShowMenu] = useState(true);
  
  const [active, setActive] = useState(0)
  console.log(active);

  const toggleMenu = () => {
    setShowMenu(showMenu);
  };

  return (
    <>
      <div className="main">
        <UpperBody showMenu={showMenu} active={active}/>
        <LowerBody toggleMenu={toggleMenu} setActive={setActive}/>
      </div>
    </>
  );
}

export default App;
