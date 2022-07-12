import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../conent.service';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  content?: Content;
  defaultImagePath = "assets/default-image.png";

  constructor(private route: ActivatedRoute, private contentService: ContentService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let contentId = params['id'];
      if (contentId && contentId != "null") {
        this.getContentDetials(contentId)
      } else {
        this.router.navigate(['/list']);
      }
    });
  }

  getContentDetials(contentId: string) {
    this.contentService.getFavouriteWebSeriesContent(parseInt(contentId)).subscribe({
      next: (resp) => { this.content = resp; },
      error: (err) => { this.content = undefined }
    });
  }

  previousContent() {
    if (this.content && this.content.id && this.content.id > 0) {
      let id = this.content.id - 1;
      let contentDetailRoute = '/detail/' + id;
      this.router.navigate([contentDetailRoute]);
    }
  }
}
