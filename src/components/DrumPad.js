import React from 'react';

function DrumPad({ description, padClick, keypress, audioSrc, color }) {
  return (
    <div className='drum-pad-container'>
      <div className={`drum-pad ${color}`} id={description} onClick={padClick}>
        <audio id={keypress} src={audioSrc}></audio>
        <div
          className='drum-pad-circle'
          id={`circle-${keypress}`}
          data-color={color}
        ></div>
      </div>
      <div className='drum-pad-description'>
        <p className='drum-pad-key'>{keypress}</p>
      </div>
    </div>
  );
}

export default DrumPad;
