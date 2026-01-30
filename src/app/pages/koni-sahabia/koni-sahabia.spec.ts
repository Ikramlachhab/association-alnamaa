import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoniSahabia } from './koni-sahabia';

describe('KoniSahabia', () => {
  let component: KoniSahabia;
  let fixture: ComponentFixture<KoniSahabia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KoniSahabia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoniSahabia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
