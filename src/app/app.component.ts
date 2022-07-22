import { Component, OnInit } from '@angular/core';
import { AppUpdateService } from './app-update.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'SanandMyFavouriteWebSeries';

  constructor(appUpdateService: AppUpdateService) {
    appUpdateService.openSnackbar();
  }

  ngOnInit(): void {
  }

}

