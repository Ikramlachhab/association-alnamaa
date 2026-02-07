import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HamlatDifeeComponent } from './hamlat-difee.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('HamlatDifeeComponent', () => {
  let component: HamlatDifeeComponent;
  let fixture: ComponentFixture<HamlatDifeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HamlatDifeeComponent, CommonModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HamlatDifeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('يجب التحقق من صحة أرقام الهواتف الدولية المختلفة', () => {
    const validNumbers = ['+212612345678', '+33123456789', '00966501234567', '+12025550101'];
    validNumbers.forEach(num => {
      expect((component as any).isValidPhone(num)).toBeTrue();
    });
  });

  it('يجب رفض الأرقام غير المنطقية', () => {
    const invalidNumbers = ['123', 'abc', '+1', '000000'];
    invalidNumbers.forEach(num => {
      expect((component as any).isValidPhone(num)).toBeFalse();
    });
  });
});
