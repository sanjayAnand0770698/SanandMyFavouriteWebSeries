import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../models/content';
import { FavouriteWebSeriesService } from '../favourite-web-series.service';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  seriesList: Content[] = [];
  @Input() searchedItemId?: number;

  constructor(private favouriteWebSeriesService: FavouriteWebSeriesService) {
  }

  ngOnInit(): void {
    this.getSeriesList();
  }

  ngOnChanges() {
    console.log(this.searchedItemId)

  }

  getSeriesList(): void {
    this.favouriteWebSeriesService.getFavouriteWebSeriesList()
      .subscribe(seriesList => this.seriesList = seriesList);
  }

}
