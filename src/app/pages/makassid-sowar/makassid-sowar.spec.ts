import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakassidSowar } from './makassid-sowar';

describe('MakassidSowar', () => {
  let component: MakassidSowar;
  let fixture: ComponentFixture<MakassidSowar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakassidSowar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakassidSowar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
