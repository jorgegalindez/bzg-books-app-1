import { Component, OnInit } from '@angular/core';
import { Store, } from "@ngrx/store";
import * as fromRoot from "../../../reducers";
import * as layout from "../../actions/layout";
import { BookListService } from "../../../books-main/services/list/book-list.service";
import { User } from "firebase/app";
import {AngularFireAuth} from "angularfire2/auth";
import {FavoritesService} from "../../../favorites/services/favorites.service";

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  state: string;
  user: User;
  countFavorites : number = 0;

  constructor(private bookService: BookListService, private store: Store<fromRoot.State>, private authFire: AngularFireAuth,private bookfavoritesService: FavoritesService) {
    this.state = 'open';
  }

  ngOnInit() {
    this.authFire.authState
      .subscribe(
        user => {
          this.user = user;
          this.bookfavoritesService.listFavorites(user).valueChanges().subscribe(
            favoritesBooks => {
                this.countFavorites = favoritesBooks.length;
            }
          );
        }
      )
  }

  open() {
    if (this.state === 'close') {
      this.state = 'open';
      this.store.dispatch(new layout.OpenSideNav());
    } else {
      this.state = 'close';
      this.store.dispatch(new layout.CloseSideNav())
    }
  }

  searchBooks(text: string) {
    this.bookService.searchBooks(text, 0, 20);
  }

}
