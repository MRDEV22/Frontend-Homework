import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxStarRatingModule } from 'ngx-star-rating';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';

import { ComponentsModule } from '../components/components.module';
import { WishListComponent } from './wish-list/wish-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    BookComponent,
    WishListComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NgxStarRatingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesModule { }
