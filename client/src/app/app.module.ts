import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './core/services/auth.interseptor';
import { AuthGuard } from './core/services/auth-guard.service';
import { MatrialModule } from './core/modules/material.module';
import { MainNavigationComponent } from './shared/main-navigation/main-navigation.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'prefix'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    pathMatch: 'prefix',
    data: { preload: true }
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canLoad: [AuthGuard],
    pathMatch: 'prefix',
    data: { preload: true }
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'prefix'
  }
];

@NgModule({
  declarations: [AppComponent, NavigationComponent, MainNavigationComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatrialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
