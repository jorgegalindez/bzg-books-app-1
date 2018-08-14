import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksSimilarComponent } from './books-similar.component';

describe('BooksSimilarComponent', () => {
  let component: BooksSimilarComponent;
  let fixture: ComponentFixture<BooksSimilarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksSimilarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
