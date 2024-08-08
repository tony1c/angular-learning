import { Component, inject } from '@angular/core';
import { PizzaService } from '../../services/pizza.service';
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
  #pizzaService: PizzaService = inject(PizzaService);
  pizzaCount: number = this.#pizzaService.getPizzaCount();
  pizzas: Pizza[] = this.#pizzaService.getPizzas();
}
