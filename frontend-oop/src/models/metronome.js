export const Sound = Object.freeze({
  Click: 'Click',
  Snare: 'Snare',
  Kick: 'Kick',
  Clap: 'Clap'
});

export default class Metronome {
  constructor() {
    this._tempo = 60;
    this._sound = Sound.Click;
  }

  get tempo() {
    return this._tempo;
  }

  set tempo(value) {
    if (value < 30 || value > 240) {
      throw new Error('Tempo should be between 30 and 240');
    }
    this._tempo = value;
  }

  play() {
    this._playing = true;
    this._interval = setInterval(() => this.tick(), (60 / this._tempo) * 1000);
  }

  stop() {
    clearInterval(this._interval);
    this._playing = false;
  }

  reset() {
    this.stop();
    this.play();
  }

  tick() {
    console.log(this._sound.toString());
  }

  get tempo() {
    return this._tempo;
  }

  set tempo(value) {
    this._tempo = value;
  }

  get sound() {
    return this._sound;
  }

  set sound(value) {
    this._sound = value;
  }

  get playing() {
    return this._playing;
  }

  set playing(value) {
    this._playing = value;
  }
}
