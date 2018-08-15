import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-books-similar',
  templateUrl: './books-similar.component.html',
  styleUrls: ['./books-similar.component.css']
})
export class BooksSimilarComponent implements OnInit {
    
  @Input() book: any;

  constructor() {
   }

  ngOnInit() {
  }

}
