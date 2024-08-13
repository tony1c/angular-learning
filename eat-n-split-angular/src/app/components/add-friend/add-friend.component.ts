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
    id: crypto.randomUUID(),
    name: ['', Validators.required],
    image: 'https://i.pravatar.cc/48',
    balance: 0,
  });
  @Output() newFriend = new EventEmitter<Friend>();

  onSubmit(): void {
    if (this.addFriendForm.invalid) {
      return;
    }

    const image = `${this.addFriendForm.value.image}?=${this.addFriendForm.value.id}`;
    const newFriend = {
      ...this.addFriendForm.value,
      image,
    } as Friend;

    console.log(newFriend);
    this.newFriend.emit(newFriend);
    this.addFriendForm.reset();
  }
}
