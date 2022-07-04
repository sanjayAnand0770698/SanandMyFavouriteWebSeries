import { Component, OnInit } from '@angular/core';
import { FavouriteWebSeriesService } from '../favourite-web-series.service';
import { Content } from '../models/content';
@Component({
  selector: 'app-content-search',
  templateUrl: './content-search.component.html',
  styleUrls: ['./content-search.component.scss']
})
export class ContentSearchComponent implements OnInit {
  title = 'SanandMyFavouriteWebSeries';
  result?: string;
  content?: Content;
  isUserTyped: boolean = false;
  constructor(private favouriteWebSeriesService: FavouriteWebSeriesService) { }

  ngOnInit(): void {
  }

  getFilteredWebSeries(id: string): void {
    if (id) {
      this.favouriteWebSeriesService.getFavouriteWebSeriesContent(parseInt(id))
        .subscribe(content => {
          if (content.id !== -1) {
            this.content = content;
          } else {
            this.content = undefined;
          }
        });
    } else {
      alert("Please Enter id to filter content");
    }
  }

}
