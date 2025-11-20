import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fooddetails } from './fooddetails';

describe('Fooddetails', () => {
  let component: Fooddetails;
  let fixture: ComponentFixture<Fooddetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fooddetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fooddetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
