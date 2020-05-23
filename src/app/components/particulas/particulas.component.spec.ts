import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticulasComponent } from './particulas.component';

describe('ParticulasComponent', () => {
  let component: ParticulasComponent;
  let fixture: ComponentFixture<ParticulasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticulasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticulasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
