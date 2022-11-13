import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoelabComponent } from './nuevoelab.component';

describe('NuevoelabComponent', () => {
  let component: NuevoelabComponent;
  let fixture: ComponentFixture<NuevoelabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoelabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoelabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
