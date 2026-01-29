import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturalProjects } from './cultural-projects';

describe('CulturalProjects', () => {
  let component: CulturalProjects;
  let fixture: ComponentFixture<CulturalProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CulturalProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CulturalProjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
