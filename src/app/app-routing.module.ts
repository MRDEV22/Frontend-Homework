import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { BookComponent } from './pages/book/book.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'book/:id',
    component: BookComponent
  },
  {
    path: 'wish-list',
    component: WishListComponent
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
