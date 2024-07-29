import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { users } from '../users/users';

interface User {
  name: string;
  id: number;
  info: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  usersList = users;
  selectedUser = signal<User | null>(null);

  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (param) => {
        const id = param.get('userId');
        if (id !== null) {
          const foundUser: any = this.usersList.find((user) => user.id === id);
          this.selectedUser.set(foundUser);
        }
      },
    });
  }
}
