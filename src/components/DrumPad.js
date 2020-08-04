import React from 'react';

function DrumPad({ description, padClick, keypress, audioSrc }) {
  return (
    <div className='drum-pad-container'>
      <div className='drum-pad' id={description} onClick={padClick}>
        <audio className='clip' id={keypress} src={audioSrc}></audio>
      </div>
      <div className='drum-pad-description'>
        <p className='drum-pad-key'>{keypress}</p>
      </div>
    </div>
  );
}

export default DrumPad;
