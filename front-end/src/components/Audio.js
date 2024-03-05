// import React, { useState } from "react";

// const Audio = () => {
//   const [recording, setRecording] = useState(false);
//   const [audioChunks, setAudioChunks] = useState([]);
//   let mediaRecorder;

//   const startRecording = () => {
//     navigator.mediaDevices
//       .getUserMedia({ audio: true })
//       .then((stream) => {
//         mediaRecorder = new MediaRecorder(stream);
//         mediaRecorder.ondataavailable = (event) => {
//           setAudioChunks([...audioChunks, event.data]);
//         };
//         mediaRecorder.start();
//         setRecording(true);
//       })
//       .catch((error) => {
//         console.error("Error accessing media devices:", error);
//       });
//   };

//   const stopRecording = () => {
//     mediaRecorder.stop();
//     setRecording(false);
//     const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
//     const formData = new FormData();
//     formData.append("audio", audioBlob, "recording.wav");

//     // Send formData to your API endpoint using fetch or any HTTP client library
//     // Example:
//     // fetch('your/api/endpoint', {
//     //   method: 'POST',
//     //   body: formData
//     // })
//     // .then(response => response.json())
//     // .then(data => console.log(data))
//     // .catch(error => console.error('Error sending audio:', error));
//   };

//   return (
//     <div>
//       <button onClick={startRecording} disabled={recording}>
//         Start Recording
//       </button>
//       <button onClick={stopRecording} disabled={!recording}>
//         Stop Recording
//       </button>
//     </div>
//   );
// };

// export default Audio;

import React from "react";
import { AudioRecorder } from "react-audio-voice-recorder";

const addAudioElement = (blob) => {
  const url = URL.createObjectURL(blob);
  const audio = document.createElement("audio");
  audio.src = url;
  audio.controls = true;
  document.body.appendChild(audio);
};

const Audio = () => {
  return (
    <AudioRecorder
      onRecordingComplete={addAudioElement}
      audioTrackConstraints={{
        noiseSuppression: true,
        echoCancellation: true,
      }}
      downloadOnSavePress={true}
      downloadFileExtension="webm"
    />
  );
};

export default Audio;
