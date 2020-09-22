import React, { useState, useEffect, useRef } from 'react';
import metronomeWav from '../audio/metronome.wav';

const Metronome = ({ bpm }) => {
  const [audio] = useState(new Audio(metronomeWav));
  const [metronome, setMetronome] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const visualizer = document.getElementById('visualizer');
  const visualizerInner = document.getElementById('visualizer-inner');
  const animateVisualizer = () => {
    visualizer.classList.add('visualizer-active');
    visualizerInner.classList.add('visualizer-inner-active');
    setTimeout(() => {
      visualizer.classList.remove('visualizer-active');
      visualizerInner.classList.remove('visualizer-inner-active');
    }, 100);
  };

  // if toggled, set an interval and play audio
  // will rerender on bpm change, so intervals need to be cleared
  useEffect(() => {
    if (metronome) {
      audio.muted = false;
      const interval = setInterval(() => {
        audio.play();
        animateVisualizer();
        setIntervalId(interval);
      }, 60000 / bpm);
    }
    return () => {
      audio.muted = true;
    };
    // animateVisualizer dependency error; rerenders
    // eslint-disable-next-line
  }, [metronome, audio, bpm]);

  // catch all interval changes
  const prevIntervalIdRef = useRef();
  useEffect(() => {
    prevIntervalIdRef.current = intervalId;
  });
  const prevIntervalId = prevIntervalIdRef.current;

  // make sure only one interval is running
  useEffect(() => {
    if (prevIntervalId !== intervalId) {
      clearInterval(prevIntervalId);
    }
  }, [prevIntervalId, intervalId]);

  // clear current interval if paused
  useEffect(() => {
    if (!metronome) {
      clearInterval(intervalId);
    }
  }, [metronome, intervalId]);

  /**** visualizer ****/

  return (
    <div className='metronome'>
      <div id="visualizer" className='visualizer'>
        <div id='visualizer-inner' className='visualizer-inner'></div>
      </div>
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