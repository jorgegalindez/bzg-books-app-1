import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { BooksListMainComponent } from './containers/books-list-main/';
import { BookDetailComponent } from './containers/book-detail/';
import { BookInfoComponent } from './components/book-info/book-info.component';
import { routes } from "./routes.books-main";
import { BooksSimilarComponent } from './containers/books-similar/books-similar.component';
import { BookSimilarComponent } from './components/book-similar/book-similar.component';

const COMPONENTS = [
  BooksListMainComponent,
  BookDetailComponent,
  BookInfoComponent,
  BooksSimilarComponent,
  BookSimilarComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: COMPONENTS
})
export class BooksMainModule { }
