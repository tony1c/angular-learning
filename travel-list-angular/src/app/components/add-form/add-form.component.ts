import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';

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
    quantity: '',
    itemValue: '',
  });

  public onSubmit() {
    console.log('Submitted');
  }
}
