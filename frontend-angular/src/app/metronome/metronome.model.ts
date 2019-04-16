export enum Sound {
  Click = 'Click',
  Snare = 'Snare',
  Kick = 'Kick',
  Clap = 'Clap'
}

export class Metronome {
  private _tempo: number;
  private _sound: Sound;
  private _playing: boolean;
  private _interval: any;

  constructor(tempo = 60, sound = Sound.Click) {
    this._tempo = tempo;
    this._sound = sound;
    this._playing = false;
  }

  play(): void {
    this._playing = true;
    this._interval = setInterval(() => this.tick(), (60 / this._tempo) * 1000);
  }

  stop(): void {
    clearInterval(this._interval);
    this._playing = false;
  }

  private tick(): void {
    console.log(this._sound.toString());
  }

  public get tempo(): number {
    return this._tempo;
  }

  public set tempo(value: number) {
    this._tempo = value;
  }

  public get sound(): Sound {
    return this._sound;
  }

  public set sound(value: Sound) {
    this._sound = value;
  }

  public get playing(): boolean {
    return this._playing;
  }

  public set playing(value: boolean) {
    this._playing = value;
  }
}
