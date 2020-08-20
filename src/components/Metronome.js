import React from 'react';
import metronomeWav from '../audio/metronome.wav';

const Metronome = ({ setMetronome }) => {
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
