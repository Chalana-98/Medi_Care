import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCardsComponent } from './content-cards.component';

describe('ContentCardsComponent', () => {
  let component: ContentCardsComponent;
  let fixture: ComponentFixture<ContentCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentCardsComponent]
    });
    fixture = TestBed.createComponent(ContentCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
