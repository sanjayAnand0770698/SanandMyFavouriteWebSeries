import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../models/content';
import { ContentService } from '../conent.service';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  seriesList: Content[] = [];
  @Input() searchedItemId?: number;

  constructor(private contentService: ContentService) {
  }

  ngOnInit(): void {
    this.getSeriesList();
  }

  getSeriesList(): void {
    this.contentService.getFavouriteWebSeriesList().subscribe({
      next: (resp) => { this.seriesList = resp; },
      error: (err) => { this.seriesList = [] }
    });
  }

}
