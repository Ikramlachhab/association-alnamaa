import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adhiya } from './adhiya';

describe('Adhiya', () => {
  let component: Adhiya;
  let fixture: ComponentFixture<Adhiya>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adhiya]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adhiya);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
