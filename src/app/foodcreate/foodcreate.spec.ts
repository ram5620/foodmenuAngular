import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foodcreate } from './foodcreate';

describe('Foodcreate', () => {
  let component: Foodcreate;
  let fixture: ComponentFixture<Foodcreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Foodcreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Foodcreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
