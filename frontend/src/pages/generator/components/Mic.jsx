import React from "react";
import { ReactMic } from 'react-mic';
import logo from "../../../assets/mic.png";
import { ReactMediaRecorder } from "react-media-recorder";

function Mic() {
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
          {/* {status === "recording" && (
            <p>Recording...</p>
          )} */}
          {mediaBlobUrl && (
            <audio src={mediaBlobUrl} controls autoPlay />
          )}
        </div>
      )}
    />
  );
}

export default Mic;
