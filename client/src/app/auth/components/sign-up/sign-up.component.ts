import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidationErrors,
  AbstractControl
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { SignUpCredentials } from '../../models/auth.interrface';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  responseError: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initSignUpForm();
  }

  createAccount() {
    if (this.signUpForm.valid) {
      const credentials = this.signUpForm.value;
      delete credentials.confirmPassword;
      this.authService
        .createAccount(credentials as SignUpCredentials)
        .pipe(
          catchError((err: HttpErrorResponse) => {
            this.responseError = err.error;
            return of('error');
          })
        )
        .subscribe((response: HttpResponse<any> | 'error') => {
          if (response === 'error') {
            return;
          }
          this.router.navigateByUrl('/home');
        });
    }
  }

  get emailError(): ValidationErrors {
    return this.signUpForm.get('email').errors;
  }

  get confirmPasswordError(): ValidationErrors {
    return this.signUpForm.get('confirmPassword').errors;
  }

  private isSimilarPasswords(control: AbstractControl) {
    if (this.signUpForm) {
      const { password } = this.signUpForm.value;
      if (password !== control.value) {
        return { differentPassword: true };
      }
    }
    return null;
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
      confirmPassword: [
        null,
        Validators.compose([
          Validators.required,
          this.isSimilarPasswords.bind(this)
        ])
      ]
    });
  }
}
