import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JlFormLinkComponent } from './jl-form-link.component';

describe('JlFormLinkComponent', () => {
  let component: JlFormLinkComponent;
  let fixture: ComponentFixture<JlFormLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JlFormLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JlFormLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
