import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavouriteWebSeriesService } from '../favourite-web-series.service';
import { Content } from '../models/content';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  content?: Content;
  defaultImagePath = "assets/default-image.png";

  constructor(private route: ActivatedRoute, private favouriteWebSeriesService: FavouriteWebSeriesService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let contentId = params['id'];
      console.log(contentId)
      this.favouriteWebSeriesService.getFavouriteWebSeriesContent(parseInt(contentId))
        .subscribe(content => {
          this.content = content;
        });
    });
  }

  previousContent() {
    if (this.content && this.content.id > 0) {
      let id = this.content.id - 1;
      let contentDetailRoute = '/detail/' + id;
      this.router.navigate([contentDetailRoute]);
    }
  }
}
