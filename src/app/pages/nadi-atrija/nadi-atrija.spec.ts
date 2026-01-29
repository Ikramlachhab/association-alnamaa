import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NadiAtrija } from './nadi-atrija';

describe('NadiAtrija', () => {
  let component: NadiAtrija;
  let fixture: ComponentFixture<NadiAtrija>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NadiAtrija]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NadiAtrija);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
