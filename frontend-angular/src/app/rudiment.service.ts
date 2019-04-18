import { Injectable } from '@angular/core';
import { Rudiment } from './rudiment-list/rudiment.model';

@Injectable({
  providedIn: 'root'
})
export class RudimentService {
  private _rudiments = [
    new Rudiment('paradiddle'),
    new Rudiment('single stroke roll'),
    new Rudiment('double stroke roll'),
    new Rudiment('double paradiddle')
  ];

  constructor() {}

  get rudiments() {
    return this._rudiments;
  }
}
