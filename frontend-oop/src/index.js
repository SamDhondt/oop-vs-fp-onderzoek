import Metronome, { Sound } from './models/metronome';
import { MetronomeController } from './controllers/metronomeController';
import RudimentController from './controllers/rudimentController';
import PracticeSessionController from './controllers/practiceSessionController';
import PracticeSession from './models/practiceSession';
import StopWatch from './models/stopwatch';
import NetworkRequest from './util/networkRequest';

let _selectedRudiment = null;
const stopwatch = new StopWatch();
const metronomeController = new MetronomeController();
const rudimentController = new RudimentController(
  document.getElementById('rudimentList')
);
const practiceSessionController = new PracticeSessionController(
  document.getElementById('practiceSessions')
);

metronomeController.addEventListener('onMetronomeStart', () =>
  stopwatch.start()
);

metronomeController.addEventListener('onMetronomeStop', async event => {
  stopwatch.stop();

  if (_selectedRudiment) {
    const newPracticeSession = new PracticeSession(
      -1,
      metronomeController.getMetronomeTempo(),
      stopwatch.time
    );
    try {
      await rudimentController.addPracticeSessionToRudiment(
        _selectedRudiment.id,
        newPracticeSession
      );
    } catch (err) {
      console.log(err);
    }
    practiceSessionController.showPracticeSessions(_selectedRudiment.id);
  }
});

rudimentController.showRudiments('');
const filter = document.getElementById('filter');
filter.addEventListener('input', ({ target: { value: filterText } }) =>
  rudimentController.showRudiments(filterText)
);

rudimentController.addEventListener('rudimentselect', event => {
  _selectedRudiment = event.detail;
  practiceSessionController.showPracticeSessions(_selectedRudiment.id);
});

practiceSessionController.addEventListener(
  'onRemovePracticeSession',
  async event => {
    await rudimentController.removePracticeSessionFromRudiment(
      _selectedRudiment.id,
      event.detail
    );
    practiceSessionController.showPracticeSessions(_selectedRudiment.id);
  }
);

practiceSessionController.addEventListener(
  'onResetPracticeSessions',
  async event => {
    await rudimentController.removeAllPracticeSessionsFromRudiment(
      _selectedRudiment.id
    );
    practiceSessionController.showPracticeSessions(_selectedRudiment.id);
  }
);
