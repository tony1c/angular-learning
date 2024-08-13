import { Component, inject, Input } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-split-bill-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './split-bill-form.component.html',
  styleUrl: './split-bill-form.component.css',
})
export class SplitBillFormComponent {
  @Input({ required: true }) currentSelectedFriend = '';
  #fb = inject(FormBuilder);
  // diff: number = this.splitForm.value.bill - this.splitForm.value.expanse;
  splitForm = this.#fb.nonNullable.group({
    bill: ['', Validators.required],
    expanse: ['', Validators.required],
    paying: ['You', Validators.required],
  });

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

    // console.log(this.splitForm.value);
    console.log(splitBill);
    this.splitForm.reset();
  }
}
