import React, { useState, useEffect } from 'react';
import metronomeWav from '../audio/metronome.wav';

const Metronome = ({ bpm }) => {
  const [metronome, setMetronome] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // milliseconds in a minute
  // (60 seconds * 1000 = 60,000 )

  useEffect(() => {
    if (metronome) {
      let interval = setInterval(() => {
        document.getElementById('metronome').play();
      }, 60000 / bpm);
      setIntervalId(interval);
    } else {
      clearInterval(intervalId);
    }
  }, [metronome, intervalId, bpm]);

  return (
    <div className='metronome'>
      <h3>Metronome</h3>
      <div className='buttons'>
        <button onClick={() => setMetronome(true)}>
          <i className='fas fa-play'></i>
          <audio id='metronome' src={metronomeWav}></audio>
        </button>
        <button onClick={() => setMetronome(false)}>
          <i className='fas fa-pause'></i>
        </button>
      </div>
    </div>
  );
};

export default Metronome;
