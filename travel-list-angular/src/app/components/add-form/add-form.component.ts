import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css',
})
export class AddFormComponent {
  numberOfItems: number[] = Array.from({ length: 20 }, (_, i) => i + 1);
  #fb: FormBuilder = inject(FormBuilder);
  #itemsService: ItemsService = inject(ItemsService);
  itemForm = this.#fb.group({
    quantity: '1',
    itemValue: ['', Validators.required],
  });

  public onSubmit(): void {
    this.#itemsService.addItem(this.itemForm.value);
    console.log('Submitted', this.itemForm.value);
  }
}
