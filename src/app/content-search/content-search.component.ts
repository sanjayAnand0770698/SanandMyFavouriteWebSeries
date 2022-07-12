import { Component, OnInit } from '@angular/core';
import { ContentService } from '../conent.service';
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
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
  }

  getFilteredWebSeries(id: string): void {
    if (id) {
      this.contentService.getFavouriteWebSeriesContent(parseInt(id)).subscribe({
        next: (resp) => { this.content = resp; },
        error: (err) => { this.content = undefined }
      });
    } else {
      alert("Please Enter id to filter content");
    }
  }

}
