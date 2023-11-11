import React from "react";
import Mic from "./Mic";
import "../Generator.css";
function Input() {
  return (
    <div className="input">
      <div className="w-[600px] h-max my-32 text-center font-semibold opacity-30">
        <h1 className="text-[18px] leading-loose">
          ഒരു ഫോം ജനറേറ്റുചെയ്യുന്നതിനുള്ള നിങ്ങളുടെ പ്രോംപ്റ്റ് നൽകുക. എല്ലാ
          ആവശ്യമായ വിശദാംശങ്ങളും ചേർക്കുക. ഉദാഹരണം: ഞാൻ നടത്തിയ ഒരു സ്‌കൂൾ
          പരിപാടിക്കുള്ള ഫീഡ്‌ബാക്ക് ഫോം സൃഷ്‌ടിക്കുക.
        </h1>
      </div>
      <div>
        <Mic />
      </div>
    </div>
  );
}
export default Input;
