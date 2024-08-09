import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css',
})
export class AddFormComponent {
  numberOfItems: number[] = Array.from({ length: 20 }, (_, i) => i + 1);
  #fb: FormBuilder = inject(FormBuilder);
  itemForm = this.#fb.group({
    quantity: 1,
    itemValue: ['', Validators.required],
  });

  public onSubmit() {
    if (this.itemForm.value.quantity) {
      const values = {
        ...this.itemForm.value,
        quantity: +this.itemForm.value.quantity,
      };
      console.log('Submitted', values);
    }
  }
}
