import React from 'react';

const Bpm = ({ bpm, setBpm }) => {
  return (
    <div className='bpm'>
      <h3>BPM</h3>
      <span>{bpm}</span>
      <div className='buttons'>
        <button className='increase-bpm' onClick={() => setBpm(bpm + 1)}>
          <i className='fas fa-arrow-up'></i>
        </button>
        <button className='decrease-bpm' onClick={() => setBpm(bpm - 1)}>
          <i className='fas fa-arrow-down'></i>
        </button>
      </div>
    </div>
  );
};

export default Bpm;
