import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { SplitBill } from '../../models/splitBill.model';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-split-bill-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './split-bill-form.component.html',
  styleUrl: './split-bill-form.component.css',
})
export class SplitBillFormComponent {
  @Input({ required: true }) currentSelectedFriend = '';
  @Output() closeSplitForm = new EventEmitter<Event>();
  @Output() submitted = new EventEmitter<SplitBill>();

  #fb = inject(FormBuilder);
  splitForm = this.#fb.group({
    bill: ['', Validators.required],
    expanse: ['', Validators.required],
    friendExpanse: { value: '', disabled: true },
    paying: ['You', Validators.required],
  });

  constructor() {
    // Subscribe to value changes on bill and expanse fields
    this.splitForm.valueChanges.subscribe(() => {
      const bill = Number(this.splitForm.get('bill')?.value) || 0;
      const expanse = Number(this.splitForm.get('expanse')?.value) || 0;
      const friendExpanse = bill - expanse || 0;

      // Update the friendExpanse field
      this.splitForm
        .get('friendExpanse')
        ?.setValue(friendExpanse as unknown as string, { emitEvent: false });
    });
  }

  onSubmit(): void {
    if (this.splitForm.invalid) {
      return;
    }

    const bill = Number(this.splitForm.value.bill);
    const expanse = Number(this.splitForm.value.expanse);
    const splitBill = {
      ...this.splitForm.getRawValue(),
      bill,
      expanse,
    } as unknown as SplitBill;
    console.log(splitBill);
    this.closeSplitForm.emit();
    this.submitted.emit(splitBill);
    this.splitForm.reset();
  }
}
