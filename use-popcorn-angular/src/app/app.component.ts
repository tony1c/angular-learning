import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'use-popcorn-angular';

  count = 0;

  increase(): void {
    this.count++;
  }

  decrease(): void {
    if (this.count <= 0) return;

    this.count--;
  }
}
