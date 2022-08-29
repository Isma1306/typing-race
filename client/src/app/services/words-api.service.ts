import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map, take, throttleTime } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordsApiService {

  public wordsArray: string[] = ["test", "test2", "test3", "test3", "test3", "test3", "test3", "test3", "test3", "test3", "test3"];
  private interval$ = interval(3000);
  public isRunning = false;
  public words: string[] = [];
  public typing$ = new BehaviorSubject('');
  public typed$ = new BehaviorSubject<string[]>([]);

  public setTyping(word: string) {
    const newValue = this.typing$.getValue() + word;
    this.typing$.next(newValue);
  }

  public backSpaceTyping() {
    const newValue = this.typing$.getValue().slice(0, -1);
    this.typing$.next(newValue);
  }

  public cleanTyping() {
    this.typing$.next('');
  }

  public setTyped(word: string) {
    this.typed$.next(this.typed$.getValue().concat(word));

  }

  public start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.interval$.pipe(take(this.wordsArray.length))
        .subscribe((index) => {
          this.words.push(this.wordsArray[index]);
        });
    }
  }

  public spaceHandler() {
    const position = this.typed$.getValue().length;
    this.typing$.pipe(
      map((word) => {
        console.log('word :>> ', this.wordsArray[position]);
        if (this.wordsArray[position] === word.trim()) {
          this.setTyped(word.trim());
        }
      }))
      .subscribe()
      .unsubscribe();
    this.cleanTyping();
  }

}
