import { Component, inject } from '@angular/core';
import { PizzaComponent } from './components/pizza/pizza.component';
import { FooterComponent } from './components/footer/footer.component';
import { PizzaService } from './services/pizza.service';
import { Pizza } from './models/pizza.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PizzaComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pizza-menu-angular';
  #pizzaService: PizzaService = inject(PizzaService);
  pizzas: Pizza[] = this.#pizzaService.getPizzas();
  pizzaCount: number = this.#pizzaService.getPizzaCount();
}
