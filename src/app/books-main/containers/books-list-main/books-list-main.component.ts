import { Component, OnInit,  Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
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
  collectionList: Observable<any[]>;
  @Input() book: any;
  @Output() pushFavorite = new EventEmitter<any>();

  constructor(private booksService: BookListService, private collectionsService: CollectionsService,
    private angularFireAuth: AngularFireAuth, private renderer: Renderer2) {
      this.collectionList = null;
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

    this.loadCollectionList();
  }

  addFavorite(book){
    this.booksService.addFavorite(book);
  }

  public showDropdown(event, dropdownMenuId) {
    let dropdownMenu = this.renderer.nextSibling(event.target);
    dropdownMenu.dataset.toggleflag = dropdownMenu.dataset.toggleflag !== "true";

    if(dropdownMenu.dataset.toggleflag === "true" && dropdownMenu.id === dropdownMenuId) {
      this.renderer.addClass(dropdownMenu,"show");
    } else if(dropdownMenu.dataset.toggleflag === "false" && dropdownMenu.id === dropdownMenuId) {
      this.renderer.removeClass(dropdownMenu,"show");
    }
  }

  addToCollection(book, collectionKey) {
    this.angularFireAuth.authState
      .subscribe(
        user => {
          this.collectionsService.addBookToCollection(user, collectionKey, book);
        }
      );
  }

  private loadCollectionList() {
    this.angularFireAuth.authState
    .subscribe(
      user => {
        this.collectionList = this.collectionsService.listCollections(user).snapshotChanges().pipe(
          map(changes => 
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          )
        );
      }
    );
  }
}
