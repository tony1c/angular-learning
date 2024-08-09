import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css',
})
export class AddFormComponent {
  numberOfItems: number[] = Array.from({ length: 20 }, (_, i) => i + 1);
  itemToAdd = new FormControl('');

  public logValue() {
    console.log(this.itemToAdd.value);
  }
}
