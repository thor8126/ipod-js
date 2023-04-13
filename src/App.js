import "./App.css";
import React,{useState} from "react";
import UpperBody from "./components/Body/UpperBody";
import LowerBody from "./components/Body/LowerBody";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faTwitter, faFontAwesome)


function App(props) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="main">
        <UpperBody toggleMenu={toggleMenu} showMenu={showMenu} />
        <LowerBody toggleMenu={toggleMenu} showMenu={showMenu} />
      </div>
    </>
  );
}

export default App;
