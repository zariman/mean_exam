import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowObjComponent } from './show-obj.component';

describe('ShowObjComponent', () => {
  let component: ShowObjComponent;
  let fixture: ComponentFixture<ShowObjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowObjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
