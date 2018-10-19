import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewObjComponent } from './new-obj.component';

describe('NewObjComponent', () => {
  let component: NewObjComponent;
  let fixture: ComponentFixture<NewObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
