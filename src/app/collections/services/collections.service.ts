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

  createCollection(newCollection : any) {
    this.collectionsRef.push(newCollection)
      .then(() => {
        this.alertService.message({msg:"Nueva colección fue creada", type:"success"});
      },
      () => {
        this.alertService.message({msg:"Hubo un error al crear la colección", type:"error"});
      });
  }

  removeCollection(collectionKey: string) {
    this.collectionsRef.remove(collectionKey)
      .then(() => {
        this.alertService.message({msg:"La colección fue eliminada", type:"success"});
      })
      .catch(() => {
        this.alertService.message({msg:"Hubo un error al eliminar la colección", type:"error"});
      });
  }
}