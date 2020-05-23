import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitacaoComponent } from './digitacao.component';

describe('DigitacaoComponent', () => {
  let component: DigitacaoComponent;
  let fixture: ComponentFixture<DigitacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
