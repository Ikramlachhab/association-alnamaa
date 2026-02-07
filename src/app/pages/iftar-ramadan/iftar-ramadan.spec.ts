import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { IftarRamadanComponent } from './iftar-ramadan.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('IftarRamadanComponent', () => {
  let component: IftarRamadanComponent;
  let fixture: ComponentFixture<IftarRamadanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IftarRamadanComponent, CommonModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(IftarRamadanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('يجب أن يتم إنشاء المكون بنجاح', () => {
    expect(component).toBeTruthy();
  });

  it('يجب نسخ الـ RIB وإظهار التنبيه', () => {
    spyOn(navigator.clipboard, 'writeText');
    component.copyRIB();
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(component.bankAccount);
    expect(component.toastActive).toBeTrue();
  });

  it('يجب التحقق من صحة البريد الإلكتروني', () => {
    component.donorEmail = 'invalid-email';
    component.donorName = 'Test';
    component.donorPhone = '0600000000';
    component.finalSubmit();
    expect(component.toastType).toBe('error');
    expect(component.toastMessage).toContain('بريد');
  });

  it('يجب ألا يقبل تبرعاً أقل من 20 درهم', () => {
    component.donationAmount = 10;
    component.confirmDonation();
    expect(component.toastActive).toBeTrue();
    expect(component.showStep2).toBeFalse();
  });
});
