import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddFormComponent } from './components/add-form/add-form.component';
import { Subscription } from 'rxjs';
import { Item } from './models/item-model';
import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'travel-list-angular';
  itemSubscription: Subscription;
  items$: Item[] = [];

  constructor(public itemsService: ItemsService) {
    this.itemSubscription = this.itemsService.items$.subscribe(
      (items) => (this.items$ = items),
    );
  }

  itemToRemove(item: Item) {
    this.itemsService.removeItem(item.id);
  }

  toggleCompleted(item: Item) {
    this.itemsService.toggleCompleted(item.id);
  }
}
