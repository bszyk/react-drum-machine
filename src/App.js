import React, { useState, useEffect } from 'react';
import './App.css';
import DrumPads from './components/DrumPads';

function App() {
  // displays the name of the last audio played
  const [display, setDisplay] = useState('Have fun!');

  useEffect(() => {
    // listen for keyboard use
    window.addEventListener('keydown', handleKeyPress);
  });

  const padClick = (event) => {
    // identify the corresponding audio element's id 
    let currentPad = event.target.querySelector('audio').id;
    // use the id variable to grab the audio tag and play audio
    document.getElementById(currentPad).play();
    // display the name of the audio by accessing the target div's id
    setDisplay(event.target.id.replace(/_/g, ' '));
  };

  const handleKeyPress = (event) => {
    // Gather array of acceptable key presses
    let keycodes = drumLibrary.map((a, i, arr) => arr[i].keycode);
    // Check if keypress is within the acceptable array
    if (keycodes.includes(event.keyCode)) {
      // If yes, identify the key pressed as a String
      let audioId = String.fromCharCode(event.keyCode);
      // Grab the appropriate audio tag using the the above variable
      // then play audio
      document.getElementById(audioId).play();
      // display the name of the audio by accessing the id of the parent div
      setDisplay(
        document.getElementById(audioId).parentNode.id.replace(/_/g, ' ')
      );
    }
  };

  return (
    <div id='machine'>
      <h1 id='title'>Drum Machine</h1>
      <DrumPads drumLibrary={drumLibrary} play={padClick} />
      <h3 id='display'>{display}</h3>
    </div>
  );
}

const drumLibrary = [
  {
    id: 'Chord_1',
    keypress: 'Q',
    keycode: 81,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  },
  {
    id: 'Chord_2',
    keypress: 'W',
    keycode: 87,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  },
  {
    id: 'Chord_3',
    keypress: 'E',
    keycode: 69,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  },
  {
    id: 'Dry_Ohh',
    keypress: 'A',
    keycode: 65,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  },
  {
    id: 'Snare',
    keypress: 'S',
    keycode: 83,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
  },
  {
    id: 'Scraper',
    keypress: 'D',
    keycode: 68,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  },
  {
    id: 'Closed_Hi_Hat',
    keypress: 'Z',
    keycode: 90,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  },
  {
    id: 'Punchy_Kick',
    keypress: 'X',
    keycode: 88,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
  },
  {
    id: 'Side_Stick',
    keypress: 'C',
    keycode: 67,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
  },
];

export default App;
