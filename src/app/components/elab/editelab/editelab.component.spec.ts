import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditelabComponent } from './editelab.component';

describe('EditelabComponent', () => {
  let component: EditelabComponent;
  let fixture: ComponentFixture<EditelabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditelabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditelabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
