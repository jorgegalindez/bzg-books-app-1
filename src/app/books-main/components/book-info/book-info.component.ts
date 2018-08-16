import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  @Input() book: any;
  @Output() pushFavorite = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  addFavorite() {
    console.log("Search"+this.book.volumeInfo.publishedDate);
    this.pushFavorite.emit(this.book);
  }

}
