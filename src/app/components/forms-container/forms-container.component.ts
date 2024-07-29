import { Component } from '@angular/core';
import { TemplateDrivenFormComponent } from '../forms/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from '../forms/reactive-form/reactive-form.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-forms-container',
  standalone: true,
  imports: [
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    RouterOutlet,
    RouterLink,
  ],
  templateUrl: './forms-container.component.html',
  styleUrl: './forms-container.component.css',
})
export class FormsContainerComponent {}
