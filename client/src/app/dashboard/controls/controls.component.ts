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
    if ($event.code === 'Space') {
      this.wordsApi.spaceHandler();

    } else if ($event.code === 'Backspace') {
      this.wordsApi.backSpaceHandler();
    }
    else {
      console.log('$event', $event);
      this.wordsApi.setTyping($event.key);
    };
  }

  start() {
    this.isRunning = true;
    this.wordsApi.start();
  }



}
