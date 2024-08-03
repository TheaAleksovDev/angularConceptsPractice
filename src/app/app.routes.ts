import { Routes } from '@angular/router';
import { FormsContainerComponent } from './components/forms-container/forms-container.component';
import { TemplateDrivenFormComponent } from './components/forms/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { resolveUser } from './components/user/user.component';

interface User {
  name: string;
  id: string;
  info: string;
}

export const routes: Routes = [
  { path: '', redirectTo: 'forms/template-driven', pathMatch: 'full' },
  {
    path: 'forms',

    component: FormsContainerComponent,
    children: [
      { path: 'template-driven', component: TemplateDrivenFormComponent },
      { path: 'reactive', component: ReactiveFormComponent },
    ],
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: ':userId',
        component: UserComponent,
        resolve: { user: resolveUser },
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
