import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  // Decorators props
  @Input({ required: true }) user!: User
  // @Input({  required: true }) id!: string
  // @Input({  required: true }) avatar!: string
  // @Input({  required: true }) name!: string

  @Input({ required: true }) selected!: boolean
  @Output() select = new EventEmitter()

  get imagePath() {
    return 'assets/users/' + this.user.avatar
  }

  // Signals props
  // avatar = input.required<string>()
  // name = input.required<string>()

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar()
  // })


  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
