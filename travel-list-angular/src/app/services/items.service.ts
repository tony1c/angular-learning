import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  #items: string[] = [];

  public addItem(item: string) {
    this.#items.push(item);
  }

  public getItems(): string[] {
    return this.#items;
  }
}
