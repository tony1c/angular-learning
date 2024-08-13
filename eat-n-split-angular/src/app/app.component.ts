import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { initialFriends } from './mocks/friends.mock';
import { Friend } from './models/friend.model';
import { AbsPipe } from './pipes/abs.pipe';
import { AddFriendComponent } from './components/add-friend/add-friend.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AddFriendComponent, AbsPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'eat-n-split-angular';
  initialFriends: Friend[] = [];
  currentSelectedFriend = '';
  addFriend = false;

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

  toggleAddFriend(): void {
    this.addFriend = !this.addFriend;
  }

  addNewFriend(newFriend: Friend) {
    this.initialFriends.push(newFriend);
    this.addFriend = !this.addFriend;
  }
}
