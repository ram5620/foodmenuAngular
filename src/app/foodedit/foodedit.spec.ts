import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foodedit } from './foodedit';

describe('Foodedit', () => {
  let component: Foodedit;
  let fixture: ComponentFixture<Foodedit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Foodedit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Foodedit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
