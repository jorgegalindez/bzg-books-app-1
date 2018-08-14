import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSimilarComponent } from './book-similar.component';

describe('BookSimilarComponent', () => {
  let component: BookSimilarComponent;
  let fixture: ComponentFixture<BookSimilarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSimilarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
