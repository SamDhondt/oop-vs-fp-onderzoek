import React, { Component } from 'react';
import Metronome, { sounds } from './modules/metronome/metronome';

class App extends Component {
  render() {
    return <Metronome defaultSound={sounds.click} defaultTempo={60} />;
  }
}

export default App;
