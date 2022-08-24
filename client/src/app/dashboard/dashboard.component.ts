import { Component, OnInit } from '@angular/core';
import { WordsApiService } from '../services/words-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  public words: string[] = this.wordsApi.words;



  constructor(private wordsApi: WordsApiService) { }

  ngOnInit(): void {


  }



}
