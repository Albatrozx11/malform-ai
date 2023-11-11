import React, { useState, useRef } from "react";
import axios from "axios";
import { ReactMic } from "react-mic";
import logo from "../../../assets/mic.png";

// Create styles

function Mic({ onDataReady }) {
  const [record, setRecord] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const micRef = useRef(null);

  const toggleRecording = () => {
    setRecord(!record);

    if (!record) {
      startTimeout();
    } else {
      clearTimeout(timeoutId);
    }
  };

  const onData = (recordedBlob) => {
    // Use navigate function to navigate to a different route

    console.log("chunk of real-time data is: ", recordedBlob);
  };

  const onStop = async (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
    const file = new File([recordedBlob.blob], "recordedAudio.webm");

    const formData = new FormData();
    formData.append("file", file);
    await axios
      .post("http://127.0.0.1:8000/translate", formData)
      .then((response) => {
        onDataReady(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // navigate('/Output');
  };
  const startTimeout = () => {
    const timeout = setTimeout(() => {
      setRecord(false);
    }, 3000); // Adjust the timeout duration as needed (in milliseconds)
    setTimeoutId(timeout);
  };

  return (
    <div>
      <div className="flex mb-5">
        <ReactMic
          record={record}
          className="sound-wave"
          onStop={onStop}
          onData={onData}
          strokeColor="#ffff"
          backgroundColor="transparent"
          ref={(instance) => (micRef.current = instance)}
        />
        <img
          src={logo}
          alt="mic-icon"
          className="mic"
          onClick={toggleRecording}
        />
      </div>
    </div>
  );
}

export default Mic;
