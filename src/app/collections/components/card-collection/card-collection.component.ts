import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.css']
})
export class CardCollectionComponent implements OnInit {

  @Input() collection : any;
  @Output() collectionRemoved = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  removeCollection(collectionToRemove: any){
    this.collectionRemoved.emit(collectionToRemove);
  }
}
