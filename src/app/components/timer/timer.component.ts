import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css',
})
export class TimerComponent implements OnInit {
  timer = signal(10);

  ngOnInit(): void {
    const intervalId = setInterval(() => {
      const currentValue = this.timer();
      if (currentValue > 0) {
        this.timer.update((prev) => prev - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
  }
}
