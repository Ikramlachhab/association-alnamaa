import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HafrAbar } from './hafr-abar';

describe('HafrAbar', () => {
  let component: HafrAbar;
  let fixture: ComponentFixture<HafrAbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HafrAbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HafrAbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
