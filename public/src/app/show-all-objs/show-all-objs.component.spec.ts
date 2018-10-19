import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllObjsComponent } from './show-all-objs.component';

describe('ShowAllObjsComponent', () => {
  let component: ShowAllObjsComponent;
  let fixture: ComponentFixture<ShowAllObjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllObjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllObjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
