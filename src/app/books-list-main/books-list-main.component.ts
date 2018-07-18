import { Component, OnInit } from '@angular/core';
import { books } from "../data-books";

@Component({
  selector: 'app-books-list-main',
  templateUrl: './books-list-main.component.html',
  styleUrls: ['./books-list-main.component.css']
})
export class BooksListMainComponent implements OnInit {

  booksList: any[];

  constructor() { 
    this.booksList = [];
  }

  ngOnInit() {
    this.booksList = books.items;
  }

}
