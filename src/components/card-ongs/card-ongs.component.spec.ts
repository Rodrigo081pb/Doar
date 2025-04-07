import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOngsComponent } from './card-ongs.component';

describe('CardOngsComponent', () => {
  let component: CardOngsComponent;
  let fixture: ComponentFixture<CardOngsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardOngsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOngsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
