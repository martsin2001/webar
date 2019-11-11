import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/core/services/auth.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.auth.token
      }
    });
    return next.handle(req).pipe(catchError(err => this.handleError(err)));
  }

  private handleError(err: HttpErrorResponse) {
    if (err.status === 401) {
      this.auth.deleteToken();
    }

    return throwError(err);
  }
}
