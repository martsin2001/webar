import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/services/auth.interseptor';
import { MaterialModule } from './core/modules/material.module';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'webar',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    pathMatch: 'prefix',
    data: { preload: true }
  },
  {
    path: 'webar',
    loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule),
    pathMatch: 'prefix',
    data: { preload: true }
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    SharedModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
