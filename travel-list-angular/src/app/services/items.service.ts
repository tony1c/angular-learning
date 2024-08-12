import { Injectable } from '@angular/core';
import { Item } from '../models/item-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  items$: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);

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

  public clearList(): void {
    if (confirm('Are you sure you want to delete all items?')) {
      this.items$.next([]);
    } else {
      return;
    }
  }
}
