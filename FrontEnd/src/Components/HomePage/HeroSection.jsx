
// // import { Link } from 'react-router-dom'
// function HeroSection() {
//   return (
//     <div className='min-w-[100vw] min-h-[100vh] flex flex-col justify-between'>
//     <NavBar/>
//     <div className=' text-blue-400'></div>
//     <Footer/>
//     </div>
//   )
// }

import React, { useState } from 'react';

const HeroSection = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedText, setRecordedText] = useState('');

  // Web Speech API - voice recognition
  const startVoiceRecognition = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.continuous = false;

      recognition.onstart = () => {
        setIsRecording(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setRecordedText(transcript);
        setIsRecording(false);
      };

      recognition.onerror = (event) => {
        console.error('Recognition error:', event.error);
        setIsRecording(false);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.start();
    } else {
      alert('Voice recognition not supported in this browser.');
    }
  };

  return (
    <div className="p-6  mx-auto  rounded-xl shadow-md ">
      {/* Strong Motivational Line */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-orange-500 leading-16">Your voice is your power. Stand strong, stay safe, and never be afraid to ask for help!</h1>
      </div>

      {/* Voice Recognition and Form */}
      <div className="space-y-6">
        {/* Voice Recognition Section */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={startVoiceRecognition}
            className={`px-4 py-2 rounded-lg text-white font-semibold transition ${isRecording ? 'bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
          >
            {isRecording ? 'Recording...' : 'Activate Voice Recognition'}
          </button>
          <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
            Stop Recording
          </button>
        </div>

        {/* Display Recorded Text */}
        {recordedText && (
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">Recorded Voice Input:</h2>
            <p className="text-lg">{recordedText}</p>
          </div>
        )}

        {/* Optional Input Fields */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-4">
          <h2 className="text-2xl font-bold mb-4">Provide Additional Details (Optional)*</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-700">How many people are following you?</label>
              <input type="number" className="mt-1 p-2 block w-full rounded-md border-gray-800 border-2 shadow-sm" />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">How many people are surrounding you?</label>
              <input type="number" className="mt-1 p-2 block w-full rounded-md border-gray-800 border-2 shadow-sm" />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">What do they have in their hands?</label>
              <input type="text" className="mt-1 p-2 block w-full rounded-md border-gray-800 border-2 shadow-sm" />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Is there a vehicle involved? If yes, describe it.</label>
              <input type="text" className="mt-1 p-2 block w-full rounded-md border-gray-800 border-2 shadow-sm" />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Is the area crowded or isolated?</label>
              <select className="mt-1 p-2 block w-full rounded-md border-gray-800 border-2 shadow-sm">
                <option value="">Select</option>
                <option value="crowded">Crowded</option>
                <option value="isolated">Isolated</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Any weapons visible? If yes, specify.</label>
              <input type="text" className="mt-1 p-2 block w-full rounded-md border-gray-800 border-2 shadow-sm" />
            </div>
          </div>
          <button className="px-4 py-2 w-28 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};


export default HeroSection;
