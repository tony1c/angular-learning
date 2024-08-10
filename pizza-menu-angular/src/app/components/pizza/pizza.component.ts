import { Component, Input } from '@angular/core';
import { Pizza } from '../../models/pizza.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.css',
})
export class PizzaComponent {
  @Input({ required: true }) pizzas: Pizza[] = [];
}
