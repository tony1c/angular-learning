import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  hour = new Date().getHours();
  openHour = 12;
  closeHour = 22;

  isOpen: boolean = this.hour >= this.openHour && this.hour <= this.closeHour;
}
