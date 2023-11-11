import React from "react";
import Mic from "./Mic";
import "../Generator.css";
function Input() {
  const [record, setRecord] = useState(false);
  const [file, setFile] = useState(null);

  const startRecording = () => {
    setRecord(true);
  }

  const stopRecording = () => {
    setRecord(false);
  }

  const onData = (recordedBlob) => {
    console.log('chunk of real-time data is: ', recordedBlob);
  }

  const onStop = (recordedBlob) => {
    console.log('recordedBlob is: ', recordedBlob);
    setFile(new File([recordedBlob.blob], 'recordedAudio.webm'));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append the file to the form data
    formData.append('file', file);

    // Use axios to post a value to the backend
    axios.post('http://127.0.0.1:8000/translate', formData)
      .then(response => {
        console.log('Response:', response.data); // Handle the successful response here
      })
      .catch(error => {
        console.error('Error:', error); // Handle any errors that occurred during the request
      });
    }
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
