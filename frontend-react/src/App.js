import React, { Component } from 'react';
import Metronome, { sounds } from './modules/metronome/metronome';
import SearchableList from './modules/rudiments/searchableList';

const rudiments = [
  { name: 'paradiddle' },
  { name: 'single stroke roll' },
  { name: 'double stroke roll' },
  { name: 'double paradiddle' }
];

class App extends Component {
  render() {
    return (
      <div>
        <Metronome defaultSound={sounds.click} defaultTempo={60} />
        <SearchableList rudiments={rudiments} />
      </div>
    );
  }
}

export default App;
