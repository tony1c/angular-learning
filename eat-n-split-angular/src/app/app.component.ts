import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { initialFriends } from './mocks/friends.mock';
import { Friend } from './models/friend.model';
import { AbsPipe } from './pipes/abs.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AbsPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'eat-n-split-angular';
  initialFriends: Friend[] = [];
  currentSelectedFriend = '';

  ngOnInit(): void {
    this.initialFriends = initialFriends;
  }

  toggleSelectedFriend(name: string): void {
    if (this.currentSelectedFriend === name) {
      this.currentSelectedFriend = '';
    } else {
      this.currentSelectedFriend = name;
    }
  }
}
