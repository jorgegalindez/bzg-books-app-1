import { Component, OnInit, Input } from '@angular/core';
import { BookListService } from '../../services/list/book-list.service';
import { BookList } from '../../models/books';
import { BooksSimilarComponent } from '../../containers/books-similar/books-similar.component';

@Component({
  selector: 'app-book-similar',
  templateUrl: './book-similar.component.html',
  styleUrls: ['./book-similar.component.css']
})
export class BookSimilarComponent implements OnInit {

  @Input() book2: any;
  booksList: BookList;

  constructor(private booksService: BookListService) { 
    this.booksService.searchBooks("x", 0, 3);
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

  addFavorite(book){
    this.booksService.addFavorite(book);
  }
}
