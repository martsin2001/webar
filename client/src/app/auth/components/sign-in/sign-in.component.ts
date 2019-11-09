import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidationErrors
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { SignInCredentials } from '../../models/auth.interrface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy {
  showPassword: boolean;
  signInForm: FormGroup;

  private unsubscribe$: Subject<boolean> = new Subject();

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.initSignInForm();
  }

  ngOnDestroy() {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  signIn() {
    if (this.signInForm.valid) {
      this.authService
        .signIn(this.signInForm.value as SignInCredentials)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(response => {
          console.log(response);
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
