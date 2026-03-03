import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormD3Component } from './form-d3.component';

describe('FormD3Component', () => {
  let component: FormD3Component;
  let fixture: ComponentFixture<FormD3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormD3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormD3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
