import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MetronomeComponent } from './metronome/metronome.component';
import { RudimentListComponent } from './rudiment-list/rudiment-list.component';
import { RudimentService } from './rudiment.service';
import { FilterListPipe } from './filter-list.pipe';

@NgModule({
  declarations: [AppComponent, MetronomeComponent, RudimentListComponent, FilterListPipe],
  imports: [BrowserModule],
  providers: [RudimentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
