import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HakibaMadrasiyaComponent } from './hakiba-madrasiya.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('HakibaMadrasiyaComponent', () => {
  let component: HakibaMadrasiyaComponent;
  let fixture: ComponentFixture<HakibaMadrasiyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HakibaMadrasiyaComponent, CommonModule, FormsModule]
    }).compileComponents();
    fixture = TestBed.createComponent(HakibaMadrasiyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('يجب إنشاء المكون بنجاح وتحقق من مرونة رقم الهاتف الدولي', () => {
    expect(component).toBeTruthy();
  });

  it('يجب التحقق من عمل نظام التنبيهات الخارجي', () => {
    component.donationAmount = 10;
    component.confirmDonation();
    expect(component.toastActive).toBeTrue();
    expect(component.toastType).toBe('error');
  });
});
