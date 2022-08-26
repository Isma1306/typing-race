import { Injectable } from '@angular/core';
import { BehaviorSubject, from, interval, map, NEVER, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordsApiService {

  public wordsArray: string[] = ["test", "test2", "test3", "test3", "test3", "test3", "test3", "test3", "test3", "test3", "test3"];
  private interval$ = interval(3000);
  public words: string[] = [];
  public typing = new BehaviorSubject('');
  public typed: string[] = [];

  public setTyping(word: string) {
    this.typing.next(word);
  }

  public start() {
    this.interval$.pipe(take(this.wordsArray.length))
      .subscribe((index) => {
        this.words.push(this.wordsArray[index]);
      });
  }

  public spaceHandler() {

    this.typing.pipe(
      map((word) => {
        let position = this.typed.length;
        if (this.wordsArray[position] === word) {
          this.typed.push(word);
          console.log('word :>> ', word);
          this.setTyping('');
        } return NEVER;
      }))
      .subscribe()
      .unsubscribe();

  }

}
