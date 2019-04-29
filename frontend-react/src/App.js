import React, { useState } from 'react';
import Metronome, { sounds } from './modules/metronome/metronome';
import SearchableList from './common/searchableList';
import EditableList from './common/editableList';
import { compareTo, removeFrom } from './common/utils/index';
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

const removeAllItems = setList => () => setList([]);

const NO_PRACTICE_SESSIONS = 'No practice sessions for this rudiment';
const FILTER_RUDIMENTS = 'Filter rudiments...';

const App = () => {
  const [sessions, setSessions] = useState(practiceSessions);
  const removeFromSessions = removeFrom(sessions)(setSessions);
  const removeAllFromSessions = removeAllItems(setSessions);

  return (
    <main>
      <Metronome defaultSound={sounds.click} defaultTempo={60} />
      <SearchableList
        items={rudiments}
        renderItem={RudimentListItem}
        filterPredicate={compareTo}
        filterPlaceholder={FILTER_RUDIMENTS}
      />
      <EditableList
        items={sessions}
        ItemComponent={PracticeSessionItem}
        onRemove={removeFromSessions}
        onReset={removeAllFromSessions}
        placeholder={NO_PRACTICE_SESSIONS}
      />
    </main>
  );
};

export default App;
