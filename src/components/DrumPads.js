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
          // determines pad color by index
          color={i <= 2 ? 'color-1' : i >= 3 && i <= 5 ? 'color-2' : 'color-3'}
        />
      ))}
    </div>
  );
};

export default DrumPads;
