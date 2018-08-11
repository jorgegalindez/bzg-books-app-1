import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { CollectionsService } from "../../services/collections.service";
import { Observable } from "rxjs";

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
    this.angularFireAuth.authState
    .subscribe(
      user => {
        this.collectionList = this.collectionsService.listCollections(user).valueChanges();
      }
    );
  }
}
