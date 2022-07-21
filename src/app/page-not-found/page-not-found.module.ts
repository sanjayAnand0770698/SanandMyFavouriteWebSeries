import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';

const routes: Routes = [
  {
    path: '',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
    AngularMaterialModule
  ]
})
export class PageNotFoundModule { }
