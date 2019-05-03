import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyIposComponent } from './apply-ipos.component';

describe('ApplyIposComponent', () => {
  let component: ApplyIposComponent;
  let fixture: ComponentFixture<ApplyIposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplyIposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyIposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
