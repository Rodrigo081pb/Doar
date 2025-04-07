import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoDoarComponent } from './logo-doar.component';

describe('LogoDoarComponent', () => {
  let component: LogoDoarComponent;
  let fixture: ComponentFixture<LogoDoarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoDoarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoDoarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
