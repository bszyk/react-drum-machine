import React from 'react';
import './App.css';
import DrumPads from './components/DrumPads';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'Have fun!',
      bgcolor: styles.pads[Math.floor(Math.random() * styles.pads.length)],
    };
    this.randomColor = this.randomColor.bind(this);
    this.padClick = this.padClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  randomColor = () => {
    this.setState({
      bgcolor: styles.pads[Math.floor(Math.random() * styles.pads.length)],
    });
  };

  padClick = (event) => {
    let currentPad = event.target.querySelector('audio').id;
    document.getElementById(currentPad).play();
    this.setState({
      display: event.target.id.replace(/_/g, ' '),
    });
    this.randomColor();
  };

  handleKeyPress = (event) => {
    let keycodes = drumLibrary.map((a, i, arr) => arr[i].keycode);
    if (keycodes.includes(event.keyCode)) {
      let audioId = String.fromCharCode(event.keyCode);
      document.getElementById(audioId).play();
      this.setState({
        display: document
          .getElementById(audioId)
          .parentNode.id.replace(/_/g, ' '),
      });
      this.randomColor();
    }
  };

  render() {
    return (
      <div id='machine'>
        <h1 id='title'>Drum Machine</h1>
        <DrumPads
          drumLibrary={drumLibrary}
          play={this.padClick}
          bgcolor={this.state.bgcolor}
        />
        <h3 id='display'>{this.state.display}</h3>
      </div>
    );
  }
}

const drumLibrary = [
  {
    id: 'Chord_1',
    keypress: 'Q',
    keycode: 81,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3',
  },
  {
    id: 'Chord_2',
    keypress: 'W',
    keycode: 87,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3',
  },
  {
    id: 'Chord_3',
    keypress: 'E',
    keycode: 69,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3',
  },
  {
    id: 'Dry_Ohh',
    keypress: 'A',
    keycode: 65,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3',
  },
  {
    id: 'Snare',
    keypress: 'S',
    keycode: 83,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
  },
  {
    id: 'Scraper',
    keypress: 'D',
    keycode: 68,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
  },
  {
    id: 'Closed_Hi_Hat',
    keypress: 'Z',
    keycode: 90,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3',
  },
  {
    id: 'Punchy_Kick',
    keypress: 'X',
    keycode: 88,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
  },
  {
    id: 'Side_Stick',
    keypress: 'C',
    keycode: 67,
    src: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
  },
];

const styles = {
  pads: [
    { backgroundColor: '#FCF340' },
    { backgroundColor: '#7FFF00' },
    { backgroundColor: '#FF2079' },
    { backgroundColor: '#FB33DB' },
    { backgroundColor: '#F21A1D' },
    { backgroundColor: '#3CB9FC' },
  ],
};

export default App;
