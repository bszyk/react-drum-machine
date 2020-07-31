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

  const padClick = (e) => {
    // identify the corresponding audio element's id
    let currentPad = e.target.firstChild.id;
    // use the id variable to grab the audio tag and play audio
    document.getElementById(currentPad).play();
    // display the name of the audio by accessing the target div's id
    setDisplay(e.target.id.replace(/_/g, ' '));
  };

  const handleKeyPress = (e) => {
    // Gather array of acceptable key presses
    let keycodes = drumLibrary.map((drumPad) => drumPad.keycode);
    // Check if keypress is within the acceptable array
    if (keycodes.includes(e.keyCode)) {
      // If yes, identify the key pressed as a String
      let audioId = String.fromCharCode(e.keyCode);
      // Grab the appropriate audio tag using the the above variable
      let audio = document.getElementById(audioId);
      // then play audio
      audio.play();
      // display the name of the audio by accessing the id of the parent div
      setDisplay(audio.parentNode.id.replace(/_/g, ' '));
    }
  };

  return (
    <div className='container'>
      <h1 className='title'>Drum Machine</h1>
      <DrumPads drumLibrary={drumLibrary} padClick={padClick} />
      <h3 className='display'>{display}</h3>
    </div>
  );
}

const drumLibrary = [
  {
    sound: 'Chord_1',
    keypress: 'Q',
    keycode: 81,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  },
  {
    sound: 'Chord_2',
    keypress: 'W',
    keycode: 87,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  },
  {
    sound: 'Chord_3',
    keypress: 'E',
    keycode: 69,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  },
  {
    sound: 'Dry_Ohh',
    keypress: 'A',
    keycode: 65,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  },
  {
    sound: 'Snare',
    keypress: 'S',
    keycode: 83,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
  },
  {
    sound: 'Scraper',
    keypress: 'D',
    keycode: 68,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  },
  {
    sound: 'Closed_Hi_Hat',
    keypress: 'Z',
    keycode: 90,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  },
  {
    sound: 'Punchy_Kick',
    keypress: 'X',
    keycode: 88,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
  },
  {
    sound: 'Side_Stick',
    keypress: 'C',
    keycode: 67,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
  },
];

export default App;
