import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidationErrors
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { SignUpCredentials } from '../../models/auth.interrface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.initSignUpForm();
  }

  createAccount() {
    if (this.signUpForm.valid) {
      const credentials = this.signUpForm.value;
      delete credentials.confirmPassword;
      this.authService
        .createAccount(credentials as SignUpCredentials)
        .subscribe(response => {
          console.log(response);
        });
    }
  }

  get emailError(): ValidationErrors {
    return this.signUpForm.get('email').errors;
  }

  private initSignUpForm() {
    this.signUpForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [
        null,
        Validators.compose([Validators.required, Validators.email])
      ],
      password: [null, Validators.required],
      confirmPassword: [null, Validators.required]
    });
  }
}
