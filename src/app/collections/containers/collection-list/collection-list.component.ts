import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { CollectionsService } from "../../services/collections.service";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { ICollection } from '../../models/collection';
import { MessagesService } from '../../../alerts/services/messages.service';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {

  collectionList: Observable<any[]>;

  constructor(private collectionsService: CollectionsService, private angularFireAuth: AngularFireAuth,
    private alertService: MessagesService) {
      this.collectionList = null;
  }

  ngOnInit() {
    this.loadCollectionList();
  }

  createCollection(newCollection : ICollection) {
    if(newCollection) {
      this.collectionsService.createCollection(newCollection)
        .then(() => {
          this.alertService.message({msg:`La colección "${newCollection.title}" fue creada`, type:"success"});
        },
        () => {
          this.alertService.message({msg:`Hubo un error al crear la colección "${newCollection.title}"`, type:"error"});
        });
    }
  }

  removeCollection(collectionToRemove: any) {
    if(collectionToRemove) {
      this.collectionsService.removeCollection(collectionToRemove.key)
        .then(() => {
          this.alertService.message({msg:`La colección "${collectionToRemove.title}" fue eliminada`, type:"success"});
        })
        .catch(() => {
          this.alertService.message({msg:`Hubo un error al eliminar la colección "${collectionToRemove.title}"`, type:"error"});
        });
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
