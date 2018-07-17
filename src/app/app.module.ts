import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { AsideLeftComponent } from './aside-left/aside-left.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TopAsideLeftComponent } from './top-aside-left/top-aside-left.component';
import { MenuAsideLeftComponent } from './menu-aside-left/menu-aside-left.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    AsideLeftComponent,
    MainContentComponent,
    TopAsideLeftComponent,
    MenuAsideLeftComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
