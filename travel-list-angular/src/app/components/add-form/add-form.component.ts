import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/item-model';
// import { ItemsService } from '../../services/items.service';
// import { Item } from '../../models/item-model';

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
  itemForm = this.#fb.group({
    quantity: '1',
    itemValue: ['', Validators.required],
  });

  constructor(private itemsService: ItemsService) {}

  public onSubmit(): void {
    const item = this.itemForm.value as Item;
    this.itemsService.addItem(item);
  }
}
