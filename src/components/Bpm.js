import React from 'react';

const Bpm = ({ bpm, setBpm }) => {
  return (
    <div className='bpm'>
      <label htmlFor='bpm'>BPM</label>
      <input
        type='number'
        id='bpm'
        // removes leading 0 in display
        value={bpm === 0 ? '' : bpm}
        onChange={(e) =>
          e.target.value >= 0 && e.target.value <= 300
            ? setBpm(Number(e.target.value))
            : null
        }
        min='1'
        max='300'
      />
      <div className='buttons'>
        <button
          className='increase-bpm'
          onClick={() => (bpm >= 0 && bpm < 300 ? setBpm(bpm + 1) : null)}
        >
          <i className='fas fa-arrow-up'></i>
        </button>
        <button
          className='decrease-bpm'
          onClick={() => (bpm > 0 && bpm <= 300 ? setBpm(bpm - 1) : null)}
        >
          <i className='fas fa-arrow-down'></i>
        </button>
      </div>
    </div>
  );
};

export default Bpm;
