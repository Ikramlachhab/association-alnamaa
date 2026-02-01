import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MalabisFitrComponent } from './malabis-fitr';

describe('MalabisFitrComponent', () => {
  let component: MalabisFitrComponent;
  let fixture: ComponentFixture<MalabisFitrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MalabisFitrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MalabisFitrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
