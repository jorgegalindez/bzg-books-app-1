import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { CollectionsService } from "../../services/collections.service";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { ICollection } from '../../models/collection';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {

  collectionList: Observable<any[]>;

  constructor(private collectionsService: CollectionsService, private angularFireAuth: AngularFireAuth) {
    this.collectionList = null;
  }

  ngOnInit() {
    this.loadCollectionList();
  }

  createCollection(newCollection : ICollection) {
    if(newCollection) {
      this.collectionsService.createCollection(newCollection);
    }
  }

  removeCollection(collectionKey: string) {
    if(collectionKey) {
      this.collectionsService.removeCollection(collectionKey);
    }
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
