import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map, take, tap, reduce, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordsApiService {

  public wordsArray: string[] = ["test", "test2", "test3", "test3", "test3", "test3", "test3", "test3", "test3", "test3", "test3"];
  private interval$ = interval(3000).pipe(take(this.wordsArray.length));
  public isRunning = false;
  public words: string[] = [];
  public typing$ = new BehaviorSubject<string[]>([]);
  public typed$ = new BehaviorSubject<any[]>([]);

  public setTyping(letter: string) {
    this.typing$.next(this.typing$.getValue().concat(letter));
    console.log('this.typing$.getValue() setTyping :>> ', this.typing$.getValue());
  }

  public backSpaceHandler() {
    const newValue = this.typing$.getValue().slice(0, -1);
    this.typing$.next(newValue);
  }

  public cleanTyping() {
    this.typing$.next([]);

  }

  public setTyped(word: string[]) {
    const oldValue = this.typed$.getValue();
    oldValue.push(word);
    this.typed$.next(oldValue);
  }

  public start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.interval$.subscribe((index) => {
        this.words.push(this.wordsArray[index]);
      });
    }
  }

  public spaceHandler() {
    const position = this.typed$.getValue().length;
    const currentWord = [...this.wordsArray[position]];
    this.typing$.pipe(
      filter(word => JSON.stringify(currentWord) === JSON.stringify(word)),
    )
      .subscribe((word) => {
        this.setTyped(word);
      })
      .unsubscribe();
    this.cleanTyping();
  }

}
