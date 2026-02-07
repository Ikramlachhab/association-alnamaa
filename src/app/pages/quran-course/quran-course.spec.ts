import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuranCourse } from './quran-course';

describe('QuranCourse', () => {
  let component: QuranCourse;
  let fixture: ComponentFixture<QuranCourse>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuranCourse]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuranCourse);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
