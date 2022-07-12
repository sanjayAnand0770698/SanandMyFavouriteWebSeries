import { Component, OnInit } from '@angular/core';
import { ContentService } from '../conent.service';
import { Router } from '@angular/router';
import { InMemoryDataService } from '../in-memory-data.service';

@Component({
  selector: 'app-change-content',
  templateUrl: './change-content.component.html',
  styleUrls: ['./change-content.component.scss']
})
export class ChangeContentComponent implements OnInit {
  hashtags: any[] = [];
  constructor(private contentService: ContentService, private router: Router, private inMemoryDataService: InMemoryDataService) { }

  ngOnInit(): void {
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
    if (title && body && author && imagelink && type && this.hashtags.length > 0) {
      let req = {
        title: title,
        body: body,
        author: author,
        imagelink: imagelink,
        type: type,
        hashtags: this.hashtags
      }
      this.hashtags = [];
      console.log(req)
      this.contentService.addFavouriteWebSeries(req).subscribe({
        next: (resp) => {
          console.log(resp)
          this.router.navigate(['/list']);
        },
        error: (err) => { alert("content adding failed"); }
      });
    } else {
      alert("Please fill all details in form");
    }

  }
}
