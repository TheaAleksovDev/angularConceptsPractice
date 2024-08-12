import { Component, OnInit, signal } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  MinLengthValidator,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required],
    }),
    passwords: new FormGroup(
      {
        password: new FormControl('', {
          validators: [Validators.required],
        }),
        confirmPassword: new FormControl('', {
          validators: [Validators.required],
        }),
      },
      { validators: this.arePasswordsEqual }
    ),
  });

  arePasswordsEqual(control: AbstractControl) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { areEqual: false };
  }

  passwordsEqual() {
    const areDirty =
      this.form.controls.passwords.controls.password.dirty &&
      this.form.controls.passwords.controls.password.dirty;

    const areEqual =
      this.form.controls.passwords.errors?.['areEqual'] !== undefined
        ? false
        : true;

    return areDirty && areEqual;
  }

  ngOnInit(): void {
    const savedEmail = localStorage.getItem('reactive-form-email');
    setTimeout(() => {
      this.form.controls['email'].setValue(savedEmail);
    }, 1);
  }

  constructor() {
    
    this.form.valueChanges?.subscribe({
      next: ({ email }) => {
        localStorage.setItem('reactive-form-email', email ? email : '');
      },
    });
  }

  emailIsInvalid() {
    return (
      this.form.controls.email.dirty &&
      this.form.controls.email.touched &&
      this.form.controls.email.invalid
    );
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.invalid) {
      return;
    }
    console.log('Success!');
  }

  resetForm() {
    this.form.reset();
  }
}
