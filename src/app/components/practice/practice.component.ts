import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { clickEvent, countObservable } from './observable';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-practice',
  standalone: true,
  imports: [FormsModule, AsyncPipe, CommonModule],
  templateUrl: './practice.component.html',
  styleUrl: './practice.component.css',
})
export class PracticeComponent implements OnDestroy {
  count = signal(0);
  clicked = signal(false);
  countSubscribe: Subscription;
  clickEventSubscribe: Subscription;

  onClickEvent() {
    clickEvent.next(!this.clicked());
  }

  constructor() {
    this.clickEventSubscribe = clickEvent.subscribe((data) =>
      this.clicked.set(data)
    );

    this.countSubscribe = countObservable.subscribe(
      (data: number) => {
        console.log(data);
        this.count.set(data);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('complete');
      }
    );
  }

  ngOnDestroy(): void {
    this.countSubscribe.unsubscribe();
    this.clickEventSubscribe.unsubscribe();
  }
}
