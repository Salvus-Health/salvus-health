import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipcodePageComponent } from './zipcode-page.component';

describe('ZipcodePageComponent', () => {
  let component: ZipcodePageComponent;
  let fixture: ComponentFixture<ZipcodePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipcodePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipcodePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
