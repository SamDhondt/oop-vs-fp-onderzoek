import Metronome, { Sound } from '../models/metronome';
import StopWatch from '../models/stopwatch';

export class MetronomeController extends EventTarget {
  constructor() {
    super();
    this._metronome = new Metronome();
    const tempoLabel = document.getElementById('tempoLabel');
    const tempoSlider = document.getElementById('tempoSlider');
    const metronomeButton = document.getElementById('metronomeButton');
    const soundSelect = document.getElementById('soundSelect');

    tempoSlider.addEventListener('input', ({ target: { value: newTempo } }) => {
      this._metronome.tempo = newTempo;
      if (this._metronome.playing) {
        this._metronome.reset();
      }
      tempoLabel.innerText = newTempo;
    });

    metronomeButton.addEventListener('click', () => {
      if (this._metronome.playing) {
        this._metronome.stop();
        metronomeButton.innerText = 'Play';
        const event = new Event('onMetronomeStop');
        this.dispatchEvent(event);
      } else {
        this._metronome.play();
        metronomeButton.innerText = 'Stop';
        const event = new Event('onMetronomeStart');
        this.dispatchEvent(event);
      }
    });

    for (const sound in Sound) {
      const option = document.createElement('option');
      option.value = sound;
      const textnode = document.createTextNode(sound);
      option.appendChild(textnode);
      soundSelect.appendChild(option);
    }

    soundSelect.addEventListener(
      'change',
      ({ target: { value: newSound } }) => {
        this._metronome.sound = newSound;
      }
    );
  }

  getMetronomeTempo() {
    return this._metronome.tempo;
  }
}
