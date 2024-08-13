import { Component, EventEmitter, inject, Output } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Friend } from '../../models/friend.model';

@Component({
  selector: 'app-add-friend',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-friend.component.html',
  styleUrl: './add-friend.component.css',
})
export class AddFriendComponent {
  #fb = inject(FormBuilder);
  addFriendForm = this.#fb.nonNullable.group({
    name: ['', Validators.required],
    url: 'https://i.pravatar.cc/48',
  });
  @Output() newFriend = new EventEmitter<Friend>();

  onSubmit(): void {
    if (this.addFriendForm.invalid) {
      return;
    }

    const newFriend = this.addFriendForm.value as Friend;
    console.log(newFriend);
    this.newFriend.emit(newFriend);
    this.addFriendForm.reset();
  }
}
