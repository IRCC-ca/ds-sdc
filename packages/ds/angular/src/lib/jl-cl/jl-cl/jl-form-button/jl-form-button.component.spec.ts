import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JlFormButtonComponent } from './jl-form-button.component';

describe('JlFormButtonComponent', () => {
  let component: JlFormButtonComponent;
  let fixture: ComponentFixture<JlFormButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JlFormButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JlFormButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
