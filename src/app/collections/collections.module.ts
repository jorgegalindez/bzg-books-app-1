import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CollectionListComponent } from './containers/collection-list/collection-list.component';
import { CardCollectionComponent } from "./components/card-collection/card-collection.component";
import { routes } from "./routes.collections";

const COMPONENTS = [
  CollectionListComponent,
  CardCollectionComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: COMPONENTS
})
export class CollectionsModule { }
