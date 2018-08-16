import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { BookListService } from "../../services/list/book-list.service";
import { BookList } from '../../models/books';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: any;
  booksList: BookList;

  constructor(private route: ActivatedRoute, private booksService: BookListService) { 
    this.book = {};
  }

  ngOnInit() {
    let id:string;
    //id = this.route.snapshot.paramMap.get('id');

    this.route.params.subscribe((params: Params) => {
      id = params.id;
      
      this.booksService.getBook(id)
      .subscribe(
        (book: any) => {
          this.book = book;
          console.log("Bookz: "+book)
        }
      )
      setTimeout(()=>{
        this.searchSimilar(this.book.volumeInfo.title);
      }, 1000);
      

      this.booksService.bookList
      .subscribe(
        (books: BookList) => {
          if (books) {
            this.booksList = books;
          }
        }
      );
    });

  }

  addFavorite(){
    this.booksService.addFavorite(this.book);
  }

  searchSimilar(title:string){
    console.log("search similar:"+title);
    this.booksService.searchBooks(title, 1, 3);
  }

}
