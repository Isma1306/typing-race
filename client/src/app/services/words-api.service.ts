import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { BehaviorSubject, from, interval, map, NEVER, Observable, ReplaySubject, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordsApiService {

  public wordsArray: string[] = ["test", "test2", "test3", "test3", "test3", "test3", "test3", "test3", "test3", "test3", "test3"];
  private interval$ = interval(3000);
  public words: string[] = [];
  public typing$ = new BehaviorSubject('');
  public typed$ = new BehaviorSubject<string[]>([]);

  public setTyping(word: string) {
    this.typing$.next(word);
  }

  public setTyped(word: string) {
    this.typed$.next(this.typed$.getValue().concat(word));

  }

  public start() {
    this.interval$.pipe(take(this.wordsArray.length))
      .subscribe((index) => {
        this.words.push(this.wordsArray[index]);
      });
  }

  public spaceHandler() {
    const position = this.typed$.getValue().length;
    this.typing$.pipe(
      map((word) => {
        if (this.wordsArray[position] === word) {
          this.setTyped(word);
          this.setTyping('');
        } return NEVER;
      }))
      .subscribe()
      .unsubscribe();

  }

}
