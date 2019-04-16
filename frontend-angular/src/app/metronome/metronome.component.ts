import { Component, OnInit } from '@angular/core';
import { Metronome, Sound } from './metronome.model';

@Component({
  selector: 'app-metronome',
  templateUrl: './metronome.component.html',
  styleUrls: ['./metronome.component.css']
})
export class MetronomeComponent implements OnInit {
  private _metronome: Metronome;

  constructor() {
    this._metronome = new Metronome();
  }

  ngOnInit() {}

  get tempo(): number {
    return this._metronome.tempo;
  }

  set tempo(value: number) {
    this._metronome.tempo = value;
    if (this._metronome.playing) {
      this._metronome.stop();
      this._metronome.play();
    }
  }

  get sound(): Sound {
    return this._metronome.sound;
  }

  set sound(value: Sound) {
    console.log(value);
    this._metronome.sound = Sound[value];
  }

  get sounds(): Sound[] {
    const sounds = [];
    for (const sound in Sound) {
      if (isNaN(Number(sound))) {
        sounds.push(sound);
      }
    }
    return sounds;
  }

  get playing(): boolean {
    return this._metronome.playing;
  }

  playMetronome() {
    this._metronome.play();
  }

  stopMetronome() {
    this._metronome.stop();
  }
}
