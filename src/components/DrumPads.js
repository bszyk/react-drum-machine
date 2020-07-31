import React from 'react';
import DrumPad from './DrumPad';

const DrumPads = ({ drumLibrary, padClick }) => {
  return (
    <div className='drum-pads'>
      {drumLibrary.map((drumPad, i) => (
        <DrumPad
          key={i}
          description={drumPad.sound}
          padClick={padClick}
          keypress={drumPad.keypress}
          audioSrc={drumPad.src}
        />
      ))}
    </div>
  );
};

export default DrumPads;
