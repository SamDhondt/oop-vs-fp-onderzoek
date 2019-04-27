import { Component, OnInit } from '@angular/core';
import { PracticeSession } from './practice-session.model';
import { RudimentService } from '../rudiment.service';

@Component({
  selector: 'app-practice-session-list',
  templateUrl: './practice-session-list.component.html',
  styleUrls: ['./practice-session-list.component.css']
})
export class PracticeSessionListComponent implements OnInit {
  private _practiceSessions: PracticeSession[];

  constructor(private _rudimentService: RudimentService) {
    this._practiceSessions = _rudimentService.practiceSessions;
  }

  ngOnInit() {}

  get practiceSessions(): PracticeSession[] {
    return this._practiceSessions;
  }

  removePracticeSession(id: number) {
    let index: number;
    for (let i = 0; i < this._practiceSessions.length; i++) {
      if (this._practiceSessions[i].id === id) {
        index = i;
      }
    }
    this._practiceSessions.splice(index, 1);
  }

  removeAllPracticeSessions() {
    this._practiceSessions = [];
  }
}
