import { Component, OnInit } from '@angular/core';
import { FavouriteWebSeriesService } from './favourite-web-series.service';
import { Content } from './models/content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SanandMyFavouriteWebSeries';
  result?: string;
  content?: Content;
  searchedItemId?: number;
  constructor(private favouriteWebSeriesService: FavouriteWebSeriesService) {

  }

  ngOnInit(): void {

  }

  getFilteredWebSeries(id: string): void {
    if (id) {
      this.favouriteWebSeriesService.getFavouriteWebSeriesContent(parseInt(id))
        .subscribe(series => {
          console.log(series)
          this.content = series;
          this.searchedItemId = series.id;
        });
    } else {
      alert("Please Enter id to filter content");
    }

  }
}

