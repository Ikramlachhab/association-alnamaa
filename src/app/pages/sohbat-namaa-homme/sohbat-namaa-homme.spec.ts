import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SohbatNamaaHomme } from './sohbat-namaa-homme';

describe('SohbatNamaaHomme', () => {
  let component: SohbatNamaaHomme;
  let fixture: ComponentFixture<SohbatNamaaHomme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SohbatNamaaHomme]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SohbatNamaaHomme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
