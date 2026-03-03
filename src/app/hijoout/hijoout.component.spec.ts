import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijooutComponent } from './hijoout.component';

describe('HijooutComponent', () => {
  let component: HijooutComponent;
  let fixture: ComponentFixture<HijooutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijooutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HijooutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
