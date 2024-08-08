import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { pizzas } from '../mocks/pizzas-data';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private pizzas: Pizza[] = pizzas;

  public getPizzas(): Pizza[] {
    return this.pizzas;
  }

  public getPizzaCount(): number {
    return this.pizzas.length;
  }
}
