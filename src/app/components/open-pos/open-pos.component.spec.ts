import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPosComponent } from './open-pos.component';

describe('OpenPosComponent', () => {
  let component: OpenPosComponent;
  let fixture: ComponentFixture<OpenPosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenPosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenPosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
