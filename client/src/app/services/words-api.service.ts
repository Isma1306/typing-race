import { Injectable } from '@angular/core';
import { from, interval, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordsApiService {

  private wordsArray: string[] = ["test", "test2", "test3", "test3", "test3", "test3", "test3", "test3", "test3", "test3", "test3"];
  private interval$ = interval(1000);
  public words: string[] = [];
  constructor() {
    this.interval$.pipe(take(this.wordsArray.length))
      .subscribe((index) => {
        this.words.push(this.wordsArray[index]);
      });
  }


}
