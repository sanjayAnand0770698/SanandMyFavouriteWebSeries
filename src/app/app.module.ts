import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';

import { SeriesTypePipe } from './series-type.pipe';
import { BorderPipePipe } from './border-pipe.pipe';
import { HighlightImportantDataDirective } from './directives/highlight-important-data.directive';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentSearchComponent } from './content-search/content-search.component';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { HeaderComponent } from './header/header.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ChangeContentComponent } from './change-content/change-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    SeriesTypePipe,
    BorderPipePipe,
    HighlightImportantDataDirective,
    ContentDetailComponent,
    ContentSearchComponent,
    HeaderComponent,
    ChangeContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageNotFoundModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
