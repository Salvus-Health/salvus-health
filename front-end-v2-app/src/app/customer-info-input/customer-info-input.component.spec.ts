import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfoInputComponent } from './customer-info-input.component';

describe('CustomerInfoInputComponent', () => {
  let component: CustomerInfoInputComponent;
  let fixture: ComponentFixture<CustomerInfoInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerInfoInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInfoInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
