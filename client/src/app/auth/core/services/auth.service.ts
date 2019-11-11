import { Injectable } from '@angular/core';
import {
  SignInCredentials,
  SignUpCredentials
} from '../../models/auth.interrface';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(credentials: SignInCredentials): Observable<any> {
    return this.http
      .post(environment.apiEndpoint + 'api/sign-in', credentials, {
        observe: 'response'
      })
      .pipe(
        tap((res: HttpResponse<any>) => {
          this.token = res.body.token;
        })
      );
  }

  createAccount(credentials: SignUpCredentials) {
    return this.http
      .post(environment.apiEndpoint + 'api/sign-up', credentials, {
        observe: 'response'
      })
      .pipe(
        tap((res: HttpResponse<any>) => {
          this.token = res.body.token;
        })
      );
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  get token() {
    return localStorage.getItem('token');
  }

  set token(token: string) {
    localStorage.setItem('token', token);
  }
}
