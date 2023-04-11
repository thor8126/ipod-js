import "./App.css";
import React from "react";
import UpperBody from "./components/Body/UpperBody";
import LowerBody from "./components/Body/LowerBody";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faTwitter, faFontAwesome)


function App() {
  return (
    <>
      <div className="main">
        <UpperBody/>
        <LowerBody/>
      </div>
    </>
  );
}

export default App;
