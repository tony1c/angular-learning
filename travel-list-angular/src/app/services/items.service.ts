import { Injectable } from '@angular/core';
import { Item } from '../models/item-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  items$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([
    {
      id: Date.now(),
      quantity: '1',
      itemValue: 'value',
      isCompleted: false,
    },
  ]);

  public addItem(item: Item): void {
    const newItem: Item = { ...item, id: Date.now() };
    const items: Item[] = this.items$.getValue();
    const updatedItems: Item[] = [...items, newItem];
    this.items$.next(updatedItems);
  }

  public removeItem(id: number): void {
    const items: Item[] = this.items$.getValue();
    const updatedItems: Item[] = items.filter((item) => item.id !== id);
    this.items$.next(updatedItems);
  }

  public toggleCompleted(id: number): void {
    const items: Item[] = this.items$.getValue();
    const updatedItems: Item[] = items.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
    );

    this.items$.next(updatedItems);
  }

  public completedCount() {
    // Wanna get the count of the items marked as completed
  }
}
