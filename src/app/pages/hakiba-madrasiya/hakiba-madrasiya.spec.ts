import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HakibaMadrasiyaComponent } from './hakiba-madrasiya';
import { FormsModule } from '@angular/forms';

describe('HakibaMadrasiyaComponent', () => {
  let component: HakibaMadrasiyaComponent;
  let fixture: ComponentFixture<HakibaMadrasiyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HakibaMadrasiyaComponent, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HakibaMadrasiyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
