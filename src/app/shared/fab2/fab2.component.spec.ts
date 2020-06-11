import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fab2Component } from './fab2.component';

describe('Fab2Component', () => {
  let component: Fab2Component;
  let fixture: ComponentFixture<Fab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fab2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
