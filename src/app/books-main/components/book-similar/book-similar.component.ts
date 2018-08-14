import { Component, OnInit, Input } from '@angular/core';
import { BookListService } from '../../services/list/book-list.service';
import { BookList } from '../../models/books';

@Component({
  selector: 'app-book-similar',
  templateUrl: './book-similar.component.html',
  styleUrls: ['./book-similar.component.css']
})
export class BookSimilarComponent implements OnInit {

  booksList: BookList;

  constructor(private booksService: BookListService) { 
    this.booksService.searchBooks('Software', 0, 3);
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

}
