import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamlatDifee } from './hamlat-difee';

describe('HamlatDifee', () => {
  let component: HamlatDifee;
  let fixture: ComponentFixture<HamlatDifee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamlatDifee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HamlatDifee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
