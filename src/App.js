import React, { useState, useEffect } from 'react';
import './App.css';
import DrumPads from './components/DrumPads';
import Bpm from './components/Bpm';
import Metronome from './components/Metronome';
import drumLibrary from './data/drumLibrary';

function App() {
  // displays the name of the last audio played
  const [display, setDisplay] = useState('@B_SZYK');
  // updates beats per minute used by metronome
  const [bpm, setBpm] = useState(140);

  useEffect(() => {
    // listen for keyboard use
    window.addEventListener('keydown', handleKeyPress);
  });

  // iterate over drum library to find
  // matching audio from keypress
  const handleKeyPress = (e) => {
    drumLibrary.forEach((drum) => {
      if (drum.keycode === e.keyCode) {
        let audio = document.getElementById(drum.keypress);
        audio.play();
        setDisplay(drum.sound.replace(/_/g, ' ').toUpperCase());
        addPadAnimation(drum.keypress, drum.sound);
      }
    });
  };

  // iterate over drum library to find
  // matching audio from drum pad clicked
  const padClick = (e) => {
    drumLibrary.forEach((drum) => {
      if (drum.sound === e.target.id) {
        let audio = document.getElementById(drum.keypress);
        audio.play();
        setDisplay(drum.sound.replace(/_/g, ' ').toUpperCase());
        addPadAnimation(drum.keypress, drum.sound);
      }
    });
  };

  // add (then remove) css classes for animation effect
  // upon keypress or drum pad click
  const addPadAnimation = (keypress, sound) => {
    let drumPadDiv = document.getElementById(sound);
    let circle = document.getElementById(`circle-${keypress}`);
    let colorClassNum = circle.dataset.color;
    circle.classList.add(colorClassNum);
    drumPadDiv.classList.add(`drum-pad-border-${colorClassNum}`);
    setTimeout(() => {
      circle.classList.remove(circle.dataset.color);
      drumPadDiv.classList.remove(`drum-pad-border-${colorClassNum}`);
    }, 200);
  };

  return (
    <div className='container'>
      <h1 className='title'>React Drum Machine</h1>
      <DrumPads drumLibrary={drumLibrary} padClick={padClick} />
      <Metronome bpm={bpm} />
      <Bpm bpm={bpm} setBpm={setBpm} />
      <h3 className='display'>{display}</h3>
    </div>
  );
}

export default App;
