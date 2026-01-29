import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TahfidZahrawan } from './tahfid-zahrawan';

describe('TahfidZahrawan', () => {
  let component: TahfidZahrawan;
  let fixture: ComponentFixture<TahfidZahrawan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TahfidZahrawan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TahfidZahrawan);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
