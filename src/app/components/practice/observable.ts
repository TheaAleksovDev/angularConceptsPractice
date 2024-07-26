import { Observable, Subject } from 'rxjs';

export const countObservable = new Observable<number>((subscriber) => {
  let count = 0;

  setInterval(() => {
    if (count > 5) {
      subscriber.error('number greater than 5');
    }
    if (count > 3) {
      subscriber.complete();
    }
    subscriber.next(count);
    count++;
  }, 1000);
});

export const clickEvent = new Subject<boolean>();
