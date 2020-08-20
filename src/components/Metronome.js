import React, { useState, useEffect } from 'react';
import metronomeWav from '../audio/metronome.wav';

const Metronome = ({ bpm }) => {
  const [audio] = useState(new Audio(metronomeWav));
  const [metronome, setMetronome] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (metronome) {
      const interval = setInterval(() => {
        audio.play();
        setIntervalId(interval);
      }, 60000 / bpm);
    }
  }, [metronome, audio, bpm]);

  useEffect(() => {
    if (!metronome) {
      clearInterval(intervalId);
    }
  }, [metronome, intervalId]);

  return (
    <div className='metronome'>
      <h3>Metronome</h3>
      <div className='buttons'>
        <button onClick={() => setMetronome(true)}>
          <i className='fas fa-play'></i>
        </button>
        <button onClick={() => setMetronome(false)}>
          <i className='fas fa-pause'></i>
        </button>
      </div>
    </div>
  );
};

export default Metronome;
