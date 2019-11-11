import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidationErrors
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { SignInCredentials } from '../../models/auth.interrface';
import { Subject, of } from 'rxjs';
import { takeUntil, catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  showPassword: boolean;
  signInForm: FormGroup;
  responseError: string;

  private unsubscribe$: Subject<boolean> = new Subject();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initSignInForm();
    this.authService.deleteToken();
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  signIn() {
    if (this.signInForm.valid) {
      this.authService
        .signIn(this.signInForm.value as SignInCredentials)
        .pipe(
          catchError((err: HttpErrorResponse) => {
            this.responseError = err.error;
            return of(err);
          }),
          takeUntil(this.unsubscribe$)
        )
        .subscribe(response => {
          if (response.error) {
            return;
          }
          this.responseError = null;
          this.router.navigateByUrl('/home');
        });
    }
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
