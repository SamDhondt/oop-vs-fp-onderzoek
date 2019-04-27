import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MetronomeComponent } from './metronome/metronome.component';
import { RudimentListComponent } from './rudiment-list/rudiment-list.component';
import { RudimentService } from './rudiment.service';
import { FilterListPipe } from './filter-list.pipe';
import { PracticeSessionListComponent } from './practice-session-list/practice-session-list.component';

@NgModule({
  declarations: [AppComponent, MetronomeComponent, RudimentListComponent, FilterListPipe, PracticeSessionListComponent],
  imports: [BrowserModule],
  providers: [RudimentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
