import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { BookListService } from "../../services/list/book-list.service";
import { BookList } from "../../models/books";
import { CollectionsService } from '../../../collections/services/collections.service';

@Component({
  selector: 'app-books-list-main',
  templateUrl: './books-list-main.component.html',
  styleUrls: ['./books-list-main.component.css']
})
export class BooksListMainComponent implements OnInit {

  booksList: BookList;
  @Input() book: any;
  @Output() pushFavorite = new EventEmitter<any>();

  constructor(private booksService: BookListService,
    private collectionsService: CollectionsService,
    private angularFireAuth: AngularFireAuth) {
    this.booksService.searchBooks('Software');
  }

  ngOnInit() {
    this.booksService.bookList
    .subscribe(
      (books:BookList) => {
        if(books){
          this.booksList = books;
        }
      }
    );
  }
  addFavorite(){
    this.booksService.addFavorite(this.book);
  }

  addToCollection(book) {
    this.angularFireAuth.authState
      .subscribe(
        user => {
          this.collectionsService.addBookToCollection(user, "-LJgKCww5JFZ62gw5mKK", book);
        }
      );
  }
}
