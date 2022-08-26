import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ControlsComponent } from './dashboard/controls/controls.component';
import { WordsDisplayComponent } from './dashboard/words-display/words-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ControlsComponent,
    WordsDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
