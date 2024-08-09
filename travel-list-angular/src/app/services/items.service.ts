import { Injectable } from '@angular/core';
import { Item } from '../models/item-model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  #items: Item[] = [
    { quantity: 1, itemValue: 'value' },
    { quantity: 2, itemValue: 'value2' },
  ];

  public addItem(item: Item): void {
    if (item) {
      this.#items.push(item);
    }
    return;
  }

  public getItems(): Item[] {
    return this.#items;
  }
}
