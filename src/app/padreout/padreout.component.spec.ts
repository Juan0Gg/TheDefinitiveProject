import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreoutComponent } from './padreout.component';

describe('PadreoutComponent', () => {
  let component: PadreoutComponent;
  let fixture: ComponentFixture<PadreoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PadreoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
