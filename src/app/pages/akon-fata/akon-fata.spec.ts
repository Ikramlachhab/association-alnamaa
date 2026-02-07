import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkonFata } from './akon-fata';

describe('AkonFata', () => {
  let component: AkonFata;
  let fixture: ComponentFixture<AkonFata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AkonFata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkonFata);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
