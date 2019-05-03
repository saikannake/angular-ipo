import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyEquityIpoComponent } from './apply-equity-ipo.component';

describe('ApplyEquityIpoComponent', () => {
  let component: ApplyEquityIpoComponent;
  let fixture: ComponentFixture<ApplyEquityIpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyEquityIpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyEquityIpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
