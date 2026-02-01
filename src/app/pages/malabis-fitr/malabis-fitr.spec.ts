import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalabisFitr } from './malabis-fitr';

describe('MalabisFitr', () => {
  let component: MalabisFitr;
  let fixture: ComponentFixture<MalabisFitr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MalabisFitr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MalabisFitr);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
