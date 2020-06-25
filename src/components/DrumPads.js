import React from 'react';

const DrumPads = (props) => {
  const drums = props.drumLibrary.map((a, i, arr) => (
    <div
      className='drum-pad'
      style={props.bgcolor}
      id={arr[i].id}
      onClick={props.play}
    >
      <audio className='clip' id={arr[i].keypress} src={arr[i].src}></audio>
      {arr[i].keypress}
    </div>
  ));

  return <div id='pads'>{drums}</div>;
};

export default DrumPads;
