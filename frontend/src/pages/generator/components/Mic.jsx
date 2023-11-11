import React, { useState } from "react";
import logo from "../../../assets/mic.png";
import { ReactMediaRecorder } from "react-media-recorder";

function Mic() {

  const [record, setRecord] = useState(false);
  const [file, setFile] = useState(null);
  const [mic,setmic] =useState(false)

  const Micwork = () =>{
       if(mic==false){
          startRecording();
          setmic(true)
       }
       else{
          stopRecording();
          setmic(false)
       }


  }

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
    <ReactMediaRecorder
      audio
      render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div>
          <div className="h-32 w-32 m-4">
            <img
              src={logo}
              alt="mic-icon"
              className="mic"
              onClick={status === "recording" ? stopRecording : startRecording}
            />
          </div>
          {status === "recording" && (
            <p>Recording...</p>
          )}
          {mediaBlobUrl && (
            <audio src={mediaBlobUrl} controls autoPlay />
          )}
        </div>
      )}
    />
  );
}

export default Mic;
