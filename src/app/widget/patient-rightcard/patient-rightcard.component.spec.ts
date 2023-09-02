import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRightcardComponent } from './patient-rightcard.component';

describe('PatientRightcardComponent', () => {
  let component: PatientRightcardComponent;
  let fixture: ComponentFixture<PatientRightcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientRightcardComponent]
    });
    fixture = TestBed.createComponent(PatientRightcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
