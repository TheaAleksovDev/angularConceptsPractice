import {
  afterNextRender,
  Component,
  OnDestroy,
  OnInit,
  viewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css',
})
export class TemplateDrivenFormComponent implements OnInit, OnDestroy {
  private form = viewChild.required<NgForm>('form');
  private formSubscription: Subscription | undefined;
  ngOnInit(): void {
    const savedEmail = localStorage.getItem('email');
    setTimeout(() => {
      this.form().controls['email'].setValue(savedEmail);
    }, 1);
  }
  constructor() {
    afterNextRender(() => {
      this.formSubscription = this.form().valueChanges?.subscribe({
        next: ({ email }) => {
          localStorage.setItem('email', email ? email : '');
        },
      });
    });
  }

  resetForm() {
    this.form().reset();
  }

  ngOnDestroy(): void {
    this.formSubscription?.unsubscribe();
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log('Success!');
    console.log(
      'email: ' + this.form().value.email,
      ', password: ' + this.form().value.password
    );
  }
}
