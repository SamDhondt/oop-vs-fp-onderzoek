import { createOption, createButton } from './modules/components';
import { startMetronome } from './modules/metronome';
import {
  createRudimentListNode,
  onRudimentClick,
  retrieveRudiments
} from './modules/rudiment';
import {
  sequence,
  appendToDOMElement,
  getItemNodes,
  filterList,
  getTimeString
} from './utils';
import {
  createPracticeSessionListItem,
  retrievePracticeSessions,
  createPracticeSessionList
} from './modules/practiceSession';
import { post, deleteRequest } from './modules/network';

const NO_SESSIONS = 'No practice sessions for this rudiment';

const Sound = Object.freeze({
  Click: 'Click',
  Snare: 'Snare',
  Kick: 'Kick',
  Clap: 'Clap'
});

let interval = null;
let rudiments = null;
let getTimeFromStart = null;
let selectedRudimentId = null;

const tempoLabel = document.getElementById('tempoLabel');
const tempoSlider = document.getElementById('tempoSlider');
tempoSlider.addEventListener('input', ({ target: { value: newTempo } }) => {
  tempoLabel.innerText = newTempo;
  if (interval) {
    clearInterval(interval);
    interval = startMetronome(tempoSlider.value, soundSelect.value);
  }
});
const metronomeButton = document.getElementById('metronomeButton');
metronomeButton.addEventListener('click', () => {
  if (metronomeButton.innerText === 'Play') {
    metronomeButton.innerText = 'Stop';
    getTimeFromStart = getTimeString(performance.now());
    interval = startMetronome(tempoSlider.value, soundSelect.value);
  } else {
    metronomeButton.innerText = 'Play';

    clearInterval(interval);
    interval = null;
    if (selectedRudimentId) {
      post(
        `http://localhost:3001/rudiments/${selectedRudimentId}/practiceSessions`
      )({
        tempo: tempoSlider.value,
        duration: getTimeFromStart(performance.now())
      }).then(_ => showPracticeSessions(practiceSessions));
    }
  }
});

const soundSelect = document.getElementById('soundSelect');
Object.values(Sound)
  .map(createOption)
  .forEach(el => soundSelect.appendChild(el));

const rudimentList = document.getElementById('rudimentList');
const practiceSessions = document.getElementById('practiceSessions');
practiceSessions.addEventListener(
  'onrudimentselect',
  event => (selectedRudimentId = event.detail)
);

practiceSessions.addEventListener('onremovepracticesession', event => {
  deleteRequest(
    `http://localhost:3001/rudiments/${selectedRudimentId}/practiceSessions/${
      event.detail
    }`
  ).then(_ => showPracticeSessions(practiceSessions));
});

practiceSessions.addEventListener('onrudimentreset', event => {
  deleteRequest(
    `http://localhost:3001/rudiments/${selectedRudimentId}/practiceSessions`
  ).then(_ => showPracticeSessions(practiceSessions));
});

const noSessions = document.getElementById('noSessions');
const showRudiments = rudimentList => {
  retrieveRudiments().then(retrievedRudiments => {
    rudiments = retrievedRudiments;
    sequence(
      getItemNodes(
        createRudimentListNode(onRudimentClick(practiceSessions, NO_SESSIONS))
      ),
      appendToDOMElement(rudimentList)
    )(...rudiments);
    document
      .getElementById('filter')
      .addEventListener('input', ({ target: { value: filterText } }) => {
        sequence(
          filterList(filterText),
          getItemNodes(
            createRudimentListNode(
              onRudimentClick(practiceSessions, NO_SESSIONS)
            )
          ),
          appendToDOMElement(rudimentList)
        )(...rudiments);
      });
  });
};

const showPracticeSessions = practiceSessions => {
  retrievePracticeSessions(selectedRudimentId).then(
    retrievedPracticeSessions => {
      practiceSessions.innerHTML = '';
      practiceSessions.appendChild(
        createPracticeSessionList(practiceSessions)(retrievedPracticeSessions)(
          NO_SESSIONS
        )
      );
      if (retrievedPracticeSessions.length > 0) {
        practiceSessions.appendChild(
          createButton('Reset', () => {
            const event = new CustomEvent('onrudimentreset');
            practiceSessions.dispatchEvent(event);
          })
        );
      }
    }
  );
};

showRudiments(rudimentList);
