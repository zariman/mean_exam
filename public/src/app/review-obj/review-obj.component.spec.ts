import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewObjComponent } from './review-obj.component';

describe('ReviewObjComponent', () => {
  let component: ReviewObjComponent;
  let fixture: ComponentFixture<ReviewObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
