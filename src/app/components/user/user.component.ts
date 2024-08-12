import { Component, effect, inject, input, OnInit } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { users } from '../users/users';
import { RandomServiceService } from '../../random-service.service';

interface User {
  name: string;
  id: string;
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
  user = input.required<User>();
  private randomService = inject(RandomServiceService);

  ngOnInit(): void {
    this.randomService.sayHi();
  }
}

export const resolveUser: ResolveFn<User | undefined> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersList = users;
  let user: User | undefined;
  const id = activatedRoute.paramMap.get('userId');
  if (id !== null) {
    user = usersList.find((user) => user.id === id);
  }
  return user;
};
