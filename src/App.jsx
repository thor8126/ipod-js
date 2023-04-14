import "./App.css";
import React,{useState} from "react";
import UpperBody from "./components/Body/UpperBody";
import LowerBody from "./components/Body/LowerBody";

function App(props) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="main">
        <UpperBody showMenu={showMenu} />
        <LowerBody toggleMenu={toggleMenu} showMenu={showMenu} />
      </div>
    </>
  );
}

export default App;
