import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item-model';

@Pipe({
  name: 'sortBy',
  standalone: true,
})
export class SortByPipe implements PipeTransform {
  transform(items: Item[], sortBy: string): Item[] {
    let sortedItems = items;

    if (sortBy === 'description') {
      sortedItems = items.sort((a, b) =>
        a.itemValue.localeCompare(b.itemValue),
      );
    }

    if (sortBy === 'status') {
      sortedItems = items.sort(
        (a, b) => Number(a.isCompleted) - Number(b.isCompleted),
      );
    }

    return sortedItems;
  }
}
