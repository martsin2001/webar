import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  showPassword: boolean;
  signInForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initSignInForm();
  }

  signIn() {
    console.log(this.signInForm.value);
  }

  get emailError(): ValidationErrors {
    return this.signInForm.get('email').errors;
  }

  private initSignInForm() {
    this.signInForm = this.fb.group({
      email: [
        null,
        Validators.compose([Validators.email, Validators.required])
      ],
      password: [null, Validators.required]
    });
  }
}
