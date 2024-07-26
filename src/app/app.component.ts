import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PracticeComponent } from './components/practice/practice.component';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormComponent } from './components/forms/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from "./components/forms/reactive-form/reactive-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PracticeComponent,
    CommonModule,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'rxjs-autocomplete-search';

  selectedComponent!: number;

  setSelectedComponent(id: number) {
    this.selectedComponent = id;
  }
}
