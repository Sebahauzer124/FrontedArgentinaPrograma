import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoskillComponent } from './nuevoskill.component';

describe('NuevoskillComponent', () => {
  let component: NuevoskillComponent;
  let fixture: ComponentFixture<NuevoskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
