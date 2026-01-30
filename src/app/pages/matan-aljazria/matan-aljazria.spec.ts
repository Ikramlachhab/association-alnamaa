import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatanAljazria } from './matan-aljazria';

describe('MatanAljazria', () => {
  let component: MatanAljazria;
  let fixture: ComponentFixture<MatanAljazria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatanAljazria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatanAljazria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
