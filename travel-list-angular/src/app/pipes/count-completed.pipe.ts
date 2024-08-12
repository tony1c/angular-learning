import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item-model';

@Pipe({
  name: 'countCompleted',
  standalone: true,
})
export class CountCompletedPipe implements PipeTransform {
  transform(items: Item[]): number {
    return items.filter((item) => item.isCompleted).length;
  }
}
