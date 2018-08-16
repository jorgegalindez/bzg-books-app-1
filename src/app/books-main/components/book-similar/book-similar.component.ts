import { Component, OnInit, Input } from '@angular/core';
import { BookListService } from '../../services/list/book-list.service';

@Component({
  selector: 'app-book-similar',
  templateUrl: './book-similar.component.html',
  styleUrls: ['./book-similar.component.css']
})
export class BookSimilarComponent implements OnInit{
  
  @Input() booksList: any;

  constructor(private booksService: BookListService) {
  }

  ngOnInit() {
  } 

  addFavorite(book){
    this.booksService.addFavorite(book);
  }
}
