import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyDebtIpoComponent } from './apply-debt-ipo.component';

describe('ApplyDebtIpoComponent', () => {
  let component: ApplyDebtIpoComponent;
  let fixture: ComponentFixture<ApplyDebtIpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyDebtIpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyDebtIpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
