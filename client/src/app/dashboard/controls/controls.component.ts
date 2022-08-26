import { Component, OnInit, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import { WordsApiService } from 'src/app/services/words-api.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {

  constructor(private wordsApi: WordsApiService) { }

  ngOnInit(): void {
  }
  start() {
    this.wordsApi.start();
  }

  inputHandler(text: string) {
    this.wordsApi.setTyping(text.trim());
  }

  spaceHandler() {
    this.wordsApi.spaceHandler();
  }
}
