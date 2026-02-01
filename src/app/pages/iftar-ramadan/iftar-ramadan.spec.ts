import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IftarRamadan } from './iftar-ramadan';

describe('IftarRamadan', () => {
  let component: IftarRamadan;
  let fixture: ComponentFixture<IftarRamadan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IftarRamadan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IftarRamadan);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
