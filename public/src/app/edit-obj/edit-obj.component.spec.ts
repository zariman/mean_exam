import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditObjComponent } from './edit-obj.component';

describe('EditObjComponent', () => {
  let component: EditObjComponent;
  let fixture: ComponentFixture<EditObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
