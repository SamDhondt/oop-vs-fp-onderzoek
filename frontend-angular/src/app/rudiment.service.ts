import { Injectable } from '@angular/core';
import { Rudiment } from './rudiment-list/rudiment.model';
import { PracticeSession } from './practice-session-list/practice-session.model';

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

  private _practiceSessions = [
    new PracticeSession(1, 100, '10m 54s'),
    new PracticeSession(2, 60, '2m 43s'),
    new PracticeSession(3, 140, '5m 02s')
  ];

  constructor() {}

  get rudiments(): Rudiment[] {
    return this._rudiments;
  }

  get practiceSessions(): PracticeSession[] {
    return this._practiceSessions;
  }
}
