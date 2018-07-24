import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CoreComponent } from "./containers/core/core.component";
import { TopNavBarComponent } from './containers/top-nav-bar/top-nav-bar.component';
import { AsideLeftComponent } from './containers/aside-left/aside-left.component';
import { MainContentComponent } from './containers/main-content/main-content.component';
import { TopAsideLeftComponent } from './components/top-aside-left/top-aside-left.component';
import { MenuAsideLeftComponent } from './components/menu-aside-left/menu-aside-left.component';
import { routes } from "./routes.core";

const COMPONENTS = [
  CoreComponent,
  TopNavBarComponent,
  AsideLeftComponent,
  MainContentComponent,
  TopAsideLeftComponent,
  MenuAsideLeftComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: COMPONENTS 
})
export class CoreModule { }
