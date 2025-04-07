import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBuscarOngsComponent } from './button-buscar-ongs.component';

describe('ButtonBuscarOngsComponent', () => {
  let component: ButtonBuscarOngsComponent;
  let fixture: ComponentFixture<ButtonBuscarOngsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonBuscarOngsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonBuscarOngsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
