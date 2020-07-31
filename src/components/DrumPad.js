import React from 'react';

function DrumPad({ description, padClick, keypress, audioSrc }) {
  return (
    <div className='drum-pad' id={description} onClick={padClick}>
      <audio className='clip' id={keypress} src={audioSrc}></audio>
      {keypress}
    </div>
  );
}

export default DrumPad;
