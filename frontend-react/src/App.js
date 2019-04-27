import React from 'react';
import Metronome, { sounds } from './modules/metronome/metronome';
import SearchableList from './common/searchableList';
import EditableList from './common/editableList';
import { compareTo } from './common/utils/index';
import PracticeSessionItem from './modules/practice-sessions/practiceSessionItem';
import RudimentListItem from './modules/rudiments/rudimentListItem';

const rudiments = [
  { id: 1, name: 'paradiddle', sticking: 'RLRRLRLL' },
  { id: 2, name: 'single stroke roll', sticking: 'RLRLRLRL' },
  { id: 3, name: 'double stroke roll', sticking: 'RRLLRRLL' },
  { id: 4, name: 'double paradiddle', sticking: 'RLRLRRLRLRLL' }
];

const practiceSessions = [
  { id: 1, tempo: 90, duration: '2min 32s' },
  { id: 2, tempo: 120, duration: '5min 16s' },
  { id: 3, tempo: 75, duration: '10min 30s' }
];

const removePracticeSession = id =>
  console.log(`removing session with id ${id}`);

const removeAllPracticeSessions = () => console.log('removing all sessions');

const App = () => (
  <div>
    <Metronome defaultSound={sounds.click} defaultTempo={60} />
    <SearchableList
      items={rudiments}
      renderItem={RudimentListItem}
      filterPredicate={compareTo}
    />
    <EditableList
      items={practiceSessions}
      ItemComponent={PracticeSessionItem}
      onRemove={removePracticeSession}
      onReset={removeAllPracticeSessions}
    />
  </div>
);

export default App;
