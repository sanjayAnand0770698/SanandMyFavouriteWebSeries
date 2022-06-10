import { Component, OnInit } from '@angular/core';
import { Content } from '../models/content';
import { FavouriteWebSeriesService } from '../favourite-web-series.service';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  result?: string;
  seriesList: Content[] = [];
  constructor(private favouriteWebSeriesService: FavouriteWebSeriesService) {
  }

  ngOnInit(): void {
    this.getSeriesList();
  }

  getSeriesList(): void {
    this.favouriteWebSeriesService.getFavouriteWebSeriesList()
      .subscribe(seriesList => this.seriesList = seriesList);
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
