import { Component, OnInit, ViewChild } from '@angular/core';
import { WordsApiService } from '../services/words-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  public words: string[] = this.wordsApi.words;

  public typed: string = "";



  constructor(private wordsApi: WordsApiService) { }

  ngOnInit(): void {


  }

  inputHandler(text: string) {
    this.typed = text;
  }

  spaceHandler() {
    this.typed = "";

  }

}
