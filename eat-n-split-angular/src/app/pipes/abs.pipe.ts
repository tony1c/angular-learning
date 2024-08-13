import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abs',
  standalone: true,
})
export class AbsPipe implements PipeTransform {
  transform(number: number): number {
    return Math.abs(number);
  }
}
