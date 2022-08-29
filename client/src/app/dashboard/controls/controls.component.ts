import { Component, HostListener, OnInit } from '@angular/core';

import { WordsApiService } from 'src/app/services/words-api.service';



@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  public isRunning: boolean = false;

  constructor(private wordsApi: WordsApiService) { }

  ngOnInit(): void {
  }

  @HostListener('document: keyup', ['$event']) inputHandler($event: KeyboardEvent) {
    if ($event.key === ' ') {
      this.wordsApi.spaceHandler();

    } if ($event.key === 'Backspace') {
      this.wordsApi.backSpaceTyping();
    }
    else this.wordsApi.setTyping($event.key);
  }

  start() {
    this.isRunning = true;
    this.wordsApi.start();
  }



}
