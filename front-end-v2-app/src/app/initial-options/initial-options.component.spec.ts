import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialOptionsComponent } from './initial-options.component';

describe('InitialOptionsComponent', () => {
  let component: InitialOptionsComponent;
  let fixture: ComponentFixture<InitialOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
