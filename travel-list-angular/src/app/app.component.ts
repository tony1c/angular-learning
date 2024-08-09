import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddFormComponent } from './components/add-form/add-form.component';
import { ItemsService } from './services/items.service';
import { Item } from './models/item-model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'travel-list-angular';
  #itemsService: ItemsService = inject(ItemsService);
  items: Item[] = this.#itemsService.getItems();
}
