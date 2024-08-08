import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PizzaComponent } from './components/pizza/pizza.component';
import { FooterComponent } from './components/footer/footer.component';
import { PizzaService } from './services/pizza.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PizzaComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'pizza-menu-angular';
  pizzaCount: number;

  constructor(private pizzaService: PizzaService) {
    this.pizzaCount = this.pizzaService.pizzaCount();
  }
}
