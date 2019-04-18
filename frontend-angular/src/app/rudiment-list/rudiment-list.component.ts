import { Component, OnInit } from '@angular/core';
import { Rudiment } from './rudiment.model';
import { RudimentService } from '../rudiment.service';

@Component({
  selector: 'app-rudiment-list',
  templateUrl: './rudiment-list.component.html',
  styleUrls: ['./rudiment-list.component.css']
})
export class RudimentListComponent implements OnInit {
  private _rudiments: Rudiment[];
  private _filter: string;

  constructor(private _rudimentService: RudimentService) {
    this._rudiments = _rudimentService.rudiments;
    this._filter = '';
  }

  ngOnInit() {}

  get rudimentNames() {
    const rudimentNames = [];
    for (const rudiment of this._rudiments) {
      rudimentNames.push(rudiment.name);
    }
    return rudimentNames;
  }

  get filter(): string {
    return this._filter;
  }

  set filter(value: string) {
    this._filter = value;
  }
}
