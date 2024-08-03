import { Component } from '@angular/core';
import { users } from './users';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  usersList = users;
}
