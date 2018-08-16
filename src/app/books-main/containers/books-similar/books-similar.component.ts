import { Component, OnInit, Input } from '@angular/core';
import { BookList } from '../../models/books';

@Component({
  selector: 'app-books-similar',
  templateUrl: './books-similar.component.html',
  styleUrls: ['./books-similar.component.css']
})
export class BooksSimilarComponent implements OnInit {
    
  @Input() booksList: BookList;

  constructor() {
   }

  ngOnInit() {
  }  

}
