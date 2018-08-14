import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListCollectionComponent } from './book-list-collection.component';

describe('BookListCollectionComponent', () => {
  let component: BookListCollectionComponent;
  let fixture: ComponentFixture<BookListCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
