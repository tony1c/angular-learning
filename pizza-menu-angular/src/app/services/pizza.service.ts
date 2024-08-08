import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { pizzas } from '../mocks/pizzas-data';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private pizzas: Pizza[] = pizzas;

  public getPizza(): Pizza[] {
    return this.pizzas;
  }

  public pizzaCount(): number {
    return this.pizzas.length;
  }
}
