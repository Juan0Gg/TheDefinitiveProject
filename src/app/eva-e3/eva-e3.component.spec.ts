import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVAE3Component } from './eva-e3.component';

describe('EVAE3Component', () => {
  let component: EVAE3Component;
  let fixture: ComponentFixture<EVAE3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EVAE3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EVAE3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
