import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `<main>
    <header class="brand-name">
      <img
        src="/assets/logo.svg"
        class="brand-logo"
        alt="Logo"
        aria-hidden="true"
      />
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
