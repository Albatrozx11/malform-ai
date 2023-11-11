import React, { useState } from 'react';
import axios from 'axios';
import { ReactMic } from 'react-mic';
import logo from '../../../assets/mic.png'

// Create styles

function App({onDataReady}) {
    const [record, setRecord] = useState(false);
    const toggleRecording = () => {
      setRecord(!record);
    }
  
    const onData = (recordedBlob) => {
       

    // Use navigate function to navigate to a different route
      
  
      console.log('chunk of real-time data is: ', recordedBlob);
    }
  
    const onStop = async (recordedBlob) => {
      
      console.log('recordedBlob is: ', recordedBlob);
      const file = new File([recordedBlob.blob], 'recordedAudio.webm');
  
      const formData = new FormData();
      formData.append('file', file);
      await axios.post('http://127.0.0.1:8000/translate', formData)
        .then(response => {
          onDataReady(response.data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
        // navigate('/Output');
    }

  return (
    <div>
    <div className='flex '>
      <ReactMic
        record={record}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
        strokeColor="#ffff"
        backgroundColor="transparent" />
      <img
        src={logo}
        alt="mic-icon"
        className="mic"
        onClick={ toggleRecording}
        />
    </div>
      {/* <button onClick={stopRecording} type="button">Stop</button>
      <form onSubmit={handleSubmit}>
        <button type="submit">Upload</button>
      </form> */}
    </div>
  );
}

export default App;