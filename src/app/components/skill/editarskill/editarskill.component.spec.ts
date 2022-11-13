import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarskillComponent } from './editarskill.component';

describe('EditarskillComponent', () => {
  let component: EditarskillComponent;
  let fixture: ComponentFixture<EditarskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarskillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
