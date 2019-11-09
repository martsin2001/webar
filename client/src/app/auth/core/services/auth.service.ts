import { Injectable } from '@angular/core';
import { SignInCredentials } from '../../models/auth.interrface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(credentials: SignInCredentials): Observable<any> {
    return this.http.post(environment.apiEndpoint + 'api/sign-in', credentials);
  }
}
