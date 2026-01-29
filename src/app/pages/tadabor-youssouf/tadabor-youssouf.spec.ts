import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TadaborYoussouf } from './tadabor-youssouf';

describe('TadaborYoussouf', () => {
  let component: TadaborYoussouf;
  let fixture: ComponentFixture<TadaborYoussouf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TadaborYoussouf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TadaborYoussouf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
