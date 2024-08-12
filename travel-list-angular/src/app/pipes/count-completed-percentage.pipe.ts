import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item-model';

@Pipe({
  name: 'countCompletedPercentage',
  standalone: true,
})
export class CountCompletedPercentagePipe implements PipeTransform {
  transform(items: Item[]): number {
    const countCompleted: number = items.filter(
      (item) => item.isCompleted,
    ).length;

    const percentage: number =
      Math.floor((100 * countCompleted) / items.length) || 0;

    return percentage;
  }
}
