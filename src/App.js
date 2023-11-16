import React from "react";
import { Html } from "./components/Html";
import { Css } from "./components/Css";
import { Javascript } from "./components/Javascript";
import { Reactjs } from "./components/Reactjs";
import './components/common.css'
function App() {
  return (
    <div className="main">
      <Html />
      <Css />
      <Javascript />
      <Reactjs />
      
    </div>
  );
}

export default App;
