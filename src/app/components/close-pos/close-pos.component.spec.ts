import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosePosComponent } from './close-pos.component';

describe('ClosePosComponent', () => {
  let component: ClosePosComponent;
  let fixture: ComponentFixture<ClosePosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosePosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosePosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
