import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaeducacionComponent } from './nuevaeducacion.component';

describe('NuevaeducacionComponent', () => {
  let component: NuevaeducacionComponent;
  let fixture: ComponentFixture<NuevaeducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaeducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaeducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
