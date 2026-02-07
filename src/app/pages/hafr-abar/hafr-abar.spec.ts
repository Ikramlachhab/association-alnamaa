import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HafrAbarComponent } from './hafr-abar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('HafrAbarComponent', () => {
  let component: HafrAbarComponent;
  let fixture: ComponentFixture<HafrAbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HafrAbarComponent, CommonModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HafrAbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('يجب تفعيل التنبيه عند محاولة التبرع بمبلغ أقل من 50', () => {
    component.donationAmount = 10;
    component.confirmDonation();
    expect(component.toastActive).toBeTrue();
    expect(component.toastType).toBe('error');
  });
});
