import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { FAVOURITE_WEB_SERIES } from '../data/mock-favourite-web-series';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  result?: string;
  seriesList: Content[];
  constructor() {
    this.seriesList = FAVOURITE_WEB_SERIES;

  }

  ngOnInit(): void {
  }
  titleFilter(input: string): any {
    //console.log(input);
    for (let i = 0; i <= 7; i++) {
      // console.log(typeof(this.rockets[i].title));
      console.log(this.seriesList[5].author);
      console.log(i);
      if (this.seriesList[i].author == input) {
        console.log(i);
        console.log(input);
        this.result = 'Exist';
        return this.result;
        //console.log(true);
      }
      else {
        this.result = 'Not Exist';
        console.log(false);
      }
    }
  }

}
