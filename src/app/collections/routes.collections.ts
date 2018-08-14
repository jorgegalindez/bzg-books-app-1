import { Routes } from "@angular/router";
import { CollectionListComponent } from "./containers/collection-list/collection-list.component";
import { BookListCollectionComponent } from "./containers/book-list-collection";

export const routes: Routes = [
    {
        path: 'list',
        component: CollectionListComponent
    },
    {
        path: 'detail/:id',
        component: BookListCollectionComponent
    },
    {
        path: '', redirectTo: 'list', pathMatch: 'full'
    }
];