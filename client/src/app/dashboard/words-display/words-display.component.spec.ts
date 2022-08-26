import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsDisplayComponent } from './words-display.component';

describe('WordsDisplayComponent', () => {
  let component: WordsDisplayComponent;
  let fixture: ComponentFixture<WordsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordsDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
