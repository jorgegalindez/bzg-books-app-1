import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { AngularFireAuth } from "angularfire2/auth";
import { CollectionsService } from '../../services/collections.service';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-book-list-collection',
  templateUrl: './book-list-collection.component.html',
  styleUrls: ['./book-list-collection.component.css']
})
export class BookListCollectionComponent implements OnInit {

  collectionBookList: any[];

  constructor(private route: ActivatedRoute, private collectionsService: CollectionsService, private angularFireAuth: AngularFireAuth) { 
    this.collectionBookList = [];
  }

  ngOnInit() {
    let collectionId:string;

    this.route.params.subscribe((params: Params) => {
      collectionId = params.id;
      
      this.angularFireAuth.authState
        .subscribe(
          user => {
            this.collectionsService.listCollectionBookList(user, collectionId).valueChanges().subscribe(
              booksObserved => { console.log(booksObserved); this.collectionBookList = booksObserved }
            );
          }
        );
    });
  }
}
