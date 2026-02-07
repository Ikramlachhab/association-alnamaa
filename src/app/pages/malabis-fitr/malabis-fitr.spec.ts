import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MalabisFitrComponent } from './malabis-fitr';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('MalabisFitrComponent', () => {
  let component: MalabisFitrComponent;
  let fixture: ComponentFixture<MalabisFitrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MalabisFitrComponent, CommonModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MalabisFitrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('يجب إنشاء المكون بنجاح', () => {
    expect(component).toBeTruthy();
  });

  it('يجب فتح النافذة عند الضغط على الزر', () => {
    component.toggleModal();
    expect(component.showModal).toBeTrue();
  });

  it('يجب أن ينتقل للخطوة الثانية عند مبلغ صالح', () => {
    component.donationAmount = 450;
    component.confirmDonation();
    expect(component.showStep2).toBeTrue();
  });
});