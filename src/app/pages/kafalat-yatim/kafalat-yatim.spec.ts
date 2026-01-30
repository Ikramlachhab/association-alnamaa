import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KafalatYatimComponent } from './kafalat-yatim';
import { FormsModule } from '@angular/forms';

describe('KafalatYatimComponent', () => {
  let component: KafalatYatimComponent;
  let fixture: ComponentFixture<KafalatYatimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KafalatYatimComponent, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KafalatYatimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});