import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPickedNumbersComponent } from './view-picked-numbers.component';

describe('ViewPickedNumbersComponent', () => {
  let component: ViewPickedNumbersComponent;
  let fixture: ComponentFixture<ViewPickedNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPickedNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPickedNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
