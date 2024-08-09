import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddFormComponent } from './components/add-form/add-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'travel-list-angular';
}
