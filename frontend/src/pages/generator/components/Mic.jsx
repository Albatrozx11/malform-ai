import React, { useState, useRef } from "react";
import axios from "axios";
import { ReactMic } from "react-mic";
import logo from "../../../assets/mic.png";

function Mic({ onDataReady }) {
  const [record, setRecord] = useState(false);
  const [loading, setLoading] = useState(false);
  const micRef = useRef(null);
  const silenceTimer = useRef(null); // New useRef hook for the timer

  const toggleRecording = () => {
    setRecord(!record);
  };

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
    clearTimeout(silenceTimer.current); // Clear the existing timer
    silenceTimer.current = setTimeout(() => {
      setRecord(false); // Stop recording after 3 seconds of silence
    }, 3000);
  };

  const onStop = async (recordedBlob) => {
    clearTimeout(silenceTimer.current); // Clear the timer when the recording is stopped
    setLoading(true);
    const file = new File([recordedBlob.blob], "recordedAudio.webm");

    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/translate",
        formData
      );
      onDataReady(response.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Set loading state to false when data is ready
    }
  };

  return (
    <div>
      {loading && (
        <h1 className="text-[white] text-[20px] opacity-[0.8]">
          Generating...
        </h1>
      )}
      <div className="flex mb-5">
        <ReactMic
          record={record}
          className="sound-wave"
          visualSetting="frequencyBars"
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
