import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { ContentSearchComponent } from './content-search/content-search.component';
import { ChangeContentComponent } from './change-content/change-content.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ContentListComponent,
  },
  {
    path: 'detail/:id',
    component: ContentDetailComponent,
  },
  {
    path: 'search',
    component: ContentSearchComponent,
  },
  {
    path: 'addContent',
    component: ChangeContentComponent,
  },
  {
    path: 'updateContent/:id',
    component: ChangeContentComponent,
  },
  {
    path: '404',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule),
  },
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }



