import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialProjects } from './social-projects';

describe('SocialProjects', () => {
  let component: SocialProjects;
  let fixture: ComponentFixture<SocialProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialProjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
