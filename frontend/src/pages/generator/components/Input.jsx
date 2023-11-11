
import React, { useState } from "react";
import Mic from "./Mic";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import "../Generator.css";
function Input() {
  const [record, setRecord] = useState(false);
  const [file, setFile] = useState("");
  const navigate = useNavigate();
  const sendToLLM =() =>{
    navigate('/Output')
  }
  

  const handleData = (data) => {
    setFile(data.text)
  }

  // const sendToLLM = () => { // Fixed the function declaration
  //   const LLMData = {
  //     prompt: file,
  //   };
  // };
 
  return (
    <div className="input">
      <div className="w-[600px] h-max my-32 text-center font-semibold opacity-30">
        <h1 className="text-[18px] leading-loose">
          {!file ? (`ഒരു ഫോം ജനറേറ്റുചെയ്യുന്നതിനുള്ള നിങ്ങളുടെ പ്രോംപ്റ്റ് നൽകുക. എല്ലാ
          ആവശ്യമായ വിശദാംശങ്ങളും ചേർക്കുക. ഉദാഹരണം ഞാൻ നടത്തിയ ഒരു സ്‌കൂൾ
          പരിപാടിക്കുള്ള ഫീഡ്‌ബാക്ക് ഫോം സൃഷ്‌ടിക്കുക.` ) : file}
        </h1>
      </div>
      <button onClick={sendToLLM}>Confirm</button>
      <div>
        <Mic onDataReady={handleData}/>
      </div>
    </div>
  );
  
}
export default Input;
