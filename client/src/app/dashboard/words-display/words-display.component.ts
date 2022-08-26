import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { WordsApiService } from 'src/app/services/words-api.service';

@Component({
  selector: 'app-words-display',
  templateUrl: './words-display.component.html',
  styleUrls: ['./words-display.component.scss']
})
export class WordsDisplayComponent implements OnInit {
  public wordsArray = this.wordsApi.wordsArray;
  public words: string[] = this.wordsApi.words;
  public typing = this.wordsApi.typing$;
  public typed = this.wordsApi.typed$;



  constructor(private wordsApi: WordsApiService) { }

  ngOnInit(): void {
  }

}
