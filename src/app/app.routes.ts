import { Routes } from '@angular/router';
import { FormsContainerComponent } from './components/forms-container/forms-container.component';
import { TemplateDrivenFormComponent } from './components/forms/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
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
      },
    ],
  },
];
