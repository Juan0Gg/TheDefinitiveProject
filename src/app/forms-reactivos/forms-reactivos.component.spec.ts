import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsReactivosComponent } from './forms-reactivos.component';

describe('FormsReactivosComponent', () => {
  let component: FormsReactivosComponent;
  let fixture: ComponentFixture<FormsReactivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormsReactivosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsReactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
