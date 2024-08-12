import { NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddFormComponent } from './components/add-form/add-form.component';
import { Subscription } from 'rxjs';
import { Item } from './models/item-model';
import { ItemsService } from './services/items.service';
import { CountCompletedPipe } from './pipes/count-completed.pipe';
import { CountCompletedPercentagePipe } from './pipes/count-completed-percentage.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AddFormComponent,
    CountCompletedPipe,
    CountCompletedPercentagePipe,
    SortByPipe,
    FormsModule,
    NgStyle,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'travel-list-angular';
  itemSubscription: Subscription;
  items$: Item[] = [];
  sortBy = 'input';

  constructor(public itemsService: ItemsService) {
    this.itemSubscription = this.itemsService.items$.subscribe(
      (items) => (this.items$ = items),
    );
  }

  itemToRemove(id: number) {
    this.itemsService.removeItem(id);
  }

  toggleCompleted(id: number) {
    this.itemsService.toggleCompleted(id);
  }

  clearList() {
    this.itemsService.clearList();
  }
}
