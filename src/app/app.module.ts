import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { AsideLeftComponent } from './aside-left/aside-left.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TopAsideLeftComponent } from './top-aside-left/top-aside-left.component';
import { MenuAsideLeftComponent } from './menu-aside-left/menu-aside-left.component';
import { BooksListMainComponent } from './books-list-main/books-list-main.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';
import { CollectionListComponent } from './collection-list/collection-list.component';
import { routes  } from "./routes";
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    AsideLeftComponent,
    MainContentComponent,
    TopAsideLeftComponent,
    MenuAsideLeftComponent,
    BooksListMainComponent,
    FavoritesListComponent,
    CollectionListComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
