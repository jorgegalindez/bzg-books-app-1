import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import * as firebase from "firebase/app";
import { MessagesService } from "../../alerts/services/messages.service";

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {

  collectionsRef: AngularFireList<any> = null;
  collectionBookListRef: AngularFireList<any> = null;

  constructor(private alertService: MessagesService, private authFire: AngularFireAuth,
    private rdb: AngularFireDatabase) {
      authFire.authState.subscribe(
        user => {
          this.collectionsRef = rdb.list('collections/' + user.uid);
        }
      )
  }

  listCollections(user : firebase.User) : AngularFireList<any[]>{
    return this.collectionsRef = this.rdb.list('collections/' + user.uid);
  }

  listCollectionBookList(user : firebase.User, collectionKey: string) : AngularFireList<any[]>{
    return this.collectionBookListRef = this.rdb.list('collections/' + user.uid + '/' + collectionKey + '/books');
  }

  createCollection(newCollection : any): firebase.database.ThenableReference {
    return this.collectionsRef.push(newCollection);
  }

  removeCollection(collectionKey: string): Promise<void> {
    return this.collectionsRef.remove(collectionKey);
  }

  addBookToCollection(user: firebase.User, collectionKey: string, book: any): firebase.database.ThenableReference {
    let collectionBooksRef = this.listCollectionBookList(user, collectionKey);
    return collectionBooksRef.push(book);
  }
}
