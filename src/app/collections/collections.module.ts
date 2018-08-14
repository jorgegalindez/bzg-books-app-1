import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CollectionListComponent } from './containers/collection-list/collection-list.component';
import { CardCollectionComponent } from "./components/card-collection/card-collection.component";
import { CollectionFormComponent } from "./components/collection-form/collection-form.component";
import { BookListCollectionComponent } from './containers/book-list-collection/book-list-collection.component';
import { routes } from "./routes.collections";

const COMPONENTS = [
  CollectionListComponent,
  CardCollectionComponent,
  CollectionFormComponent,
  BookListCollectionComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: COMPONENTS
})
export class CollectionsModule { }
