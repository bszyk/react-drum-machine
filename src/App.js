import React, { useState, useEffect } from 'react';
import './App.css';
import DrumPads from './components/DrumPads';
import drumLibrary from './data/drumLibrary';

function App() {
  // displays the name of the last audio played
  const [display, setDisplay] = useState('@B_SZYK');

  useEffect(() => {
    // listen for keyboard use
    window.addEventListener('keydown', handleKeyPress);
  });

  const padClick = (e) => {
    // identify the corresponding audio element's id
    let keypress = e.target.firstChild.id;
    // use the id variable to grab the audio tag and play audio
    document.getElementById(keypress).play();
    // set a variable for the target div
    let drumPadDiv = e.target;
    // display the name of the audio by accessing the target div's id
    setDisplay(drumPadDiv.id.replace(/_/g, ' ').toUpperCase());
    // initiate pad animation
    addPadAnimation(keypress, drumPadDiv);
  };

  const handleKeyPress = (e) => {
    // Gather array of acceptable key presses
    let keycodes = drumLibrary.map((drumPad) => drumPad.keycode);
    // Check if keypress is within the acceptable array
    if (keycodes.includes(e.keyCode)) {
      // If yes, identify the key pressed as a String
      let keypress = String.fromCharCode(e.keyCode);
      // Grab the appropriate audio tag using the the above variable
      let audio = document.getElementById(keypress);
      // then play audio
      audio.play();
      // set a variable for the parent div
      let drumPadDiv = audio.parentNode;
      // display the name of the audio by accessing the id of the parent div
      setDisplay(drumPadDiv.id.replace(/_/g, ' ').toUpperCase());
      // initiate pad animation
      addPadAnimation(keypress, drumPadDiv);
    }
  };

  const addPadAnimation = (keypress, drumPadDiv) => {
    // access the associated div for circle animation
    let circle = document.getElementById(`circle-${keypress}`);
    // identify which color is associated with the circle div
    let colorClassNum = circle.dataset.color;
    // add appropriate class to circle div and animate circle
    circle.classList.add(colorClassNum);
    // also add associated color class to drum pad border
    drumPadDiv.classList.add(`drum-pad-border-${colorClassNum}`);
    // remove classess added above to complete animation effect
    setTimeout(() => {
      circle.classList.remove(circle.dataset.color);
      drumPadDiv.classList.remove(`drum-pad-border-${colorClassNum}`);
    }, 200);
  };

  return (
    <div className='container'>
      <h1 className='title'>React Drum Machine</h1>
      <DrumPads drumLibrary={drumLibrary} padClick={padClick} />
      <h3 className='display'>{display}</h3>
    </div>
  );
}

export default App;
