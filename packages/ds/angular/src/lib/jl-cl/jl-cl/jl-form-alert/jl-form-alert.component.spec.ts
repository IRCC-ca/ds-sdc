import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JlFormAlertComponent } from './jl-form-alert.component';

describe('JlFormAlertComponent', () => {
  let component: JlFormAlertComponent;
  let fixture: ComponentFixture<JlFormAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JlFormAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JlFormAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
