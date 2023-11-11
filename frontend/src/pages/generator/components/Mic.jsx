import React from "react";
import { ReactMic } from 'react-mic';
import logo from "../../../assets/mic.png";
function Mic() {
  return (
    <div>
      <div className="h-32 w-32 m-4">
        <img src={logo} alt="mic-icon" className="mic" />
      </div>
    </div>
  );
}

export default Mic;
