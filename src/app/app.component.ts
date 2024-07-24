import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PracticeComponent } from './components/practice/practice.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PracticeComponent, CommonModule],
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
