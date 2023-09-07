import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcardComponent } from './eventcard.component';

describe('EventcardComponent', () => {
  let component: EventcardComponent;
  let fixture: ComponentFixture<EventcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventcardComponent]
    });
    fixture = TestBed.createComponent(EventcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
