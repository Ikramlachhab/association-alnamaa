import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaaMasajid } from './binaa-masajid';

describe('BinaaMasajid', () => {
  let component: BinaaMasajid;
  let fixture: ComponentFixture<BinaaMasajid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinaaMasajid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinaaMasajid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
