import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OdhiyaComponent } from './odhiya.component';
import { FormsModule } from '@angular/forms';

describe('OdhiyaComponent', () => {
  let component: OdhiyaComponent;
  let fixture: ComponentFixture<OdhiyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OdhiyaComponent, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(OdhiyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});