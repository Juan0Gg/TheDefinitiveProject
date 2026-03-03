import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploManualComponent } from './ejemplo-manual.component';

describe('EjemploManualComponent', () => {
  let component: EjemploManualComponent;
  let fixture: ComponentFixture<EjemploManualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EjemploManualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EjemploManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
