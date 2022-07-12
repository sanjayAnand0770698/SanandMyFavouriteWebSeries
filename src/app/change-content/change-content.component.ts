import { Component, OnInit } from '@angular/core';
import { ContentService } from '../conent.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Content } from '../models/content';
@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.scss']
})
export class ChangeContentComponent implements OnInit {
  hashtags: any = [];
  isEdit: boolean = false;
  content?: Content;
  constructor(private contentService: ContentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      let currentRouterUrl = this.router.url;
      let result = currentRouterUrl.match("updateContent");
      if (result) {
        let contentId = params['id'];
        if (contentId && contentId != "null") {
          this.getContentDetials(contentId)
        } else {
          alert("Id not found for updating content");
          this.router.navigate(['/addContent']);
        }
      }
    });
  }

  getContentDetials(contentId: string) {
    this.contentService.getFavouriteWebSeriesContent(parseInt(contentId)).subscribe({
      next: (resp) => {
        this.content = resp;
        if (this.content) {
          this.hashtags = this.content.hashtags;
        }
        this.isEdit = true;
      },
      error: (err) => {
        this.content = undefined;
        this.isEdit = false;
      }
    });
  }

  addHashTag(hashtag: string) {
    if (hashtag) {
      this.hashtags.push(hashtag);
    } else {
      alert("Please enter the hastag");
    }
  }

  removeHashTag(hashtag: string) {
    if (hashtag) {
      this.hashtags = this.hashtags.filter((data: string) => {
        return data !== hashtag;
      });
    } else {
      alert("Please enter the hastag");
    }
  }

  addContent(title: string, body: string, author: string, imagelink: string, type: string) {
    if (title && body && author && imagelink && this.hashtags.length > 0) {
      let contentType = type !== "" ? type : undefined;
      let req = {
        title: title,
        body: body,
        author: author,
        imagelink: imagelink,
        type: contentType,
        hashtags: this.hashtags
      }
      this.hashtags = [];
      this.contentService.addFavouriteWebSeries(req).subscribe({
        next: (resp) => {
          alert("Content added successfully")
          this.router.navigate(['/list']);
        },
        error: (err) => { alert("content adding failed"); }
      });
    } else {
      alert("Please fill all details in form");
    }
  }

  updateContent(title: string, body: string, author: string, imagelink: string, type: string) {
    if (this.content) {
      if (title && body && author && imagelink && this.hashtags.length > 0) {
        let contentType = type !== "" ? type : undefined;
        let req = {
          id: this.content.id,
          title: title,
          body: body,
          author: author,
          imagelink: imagelink,
          type: contentType,
          hashtags: this.hashtags
        }
        this.contentService.updateFavouriteWebSeries(req).subscribe({
          next: (resp) => {
            alert("Content updated successfully");
            this.router.navigate(['/list']);
            this.hashtags = [];
            this.content = undefined;
            this.isEdit = false;
          },
          error: (err) => { alert("content updation failed"); }
        });
      } else {
        alert("Please fill all details in form");
      }
    } else {
      this.router.navigate(['/list'])
    }

  }
}
