import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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

  #fb = inject(FormBuilder);
  splitForm = this.#fb.nonNullable.group({
    bill: [null, Validators.required],
    expanse: [null, Validators.required],
    friendExpanse: null,
    paying: ['You', Validators.required],
  });

  // private subscriptions: Subscription[] = [];

  constructor() {
    // Subscribe to value changes on bill and expanse fields
    this.splitForm.valueChanges.subscribe(() => {
      const bill = Number(this.splitForm.get('bill')?.value) || 0;
      const expanse = Number(this.splitForm.get('expanse')?.value) || 0;
      const friendExpanse = bill - expanse;

      // Update the friendExpanse field
      this.splitForm
        .get('friendExpanse')
        ?.setValue(friendExpanse as unknown as null, { emitEvent: false });
    });

    // this.subscriptions.push(billExpanseChanges);
  }

  onSubmit(): void {
    if (this.splitForm.invalid) {
      return;
    }

    const bill = Number(this.splitForm.value.bill);
    const expanse = Number(this.splitForm.value.expanse);
    const splitBill = {
      ...this.splitForm.value,
      bill,
      expanse,
    };
    console.log(splitBill);
    this.closeSplitForm.emit();
    this.splitForm.reset();
  }
}
