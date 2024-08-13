import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitBillFormComponent } from './split-bill-form.component';

describe('SplitBillFormComponent', () => {
  let component: SplitBillFormComponent;
  let fixture: ComponentFixture<SplitBillFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SplitBillFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplitBillFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
