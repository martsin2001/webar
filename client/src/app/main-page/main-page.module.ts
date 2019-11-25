import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/containers/main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../core/modules/material.module';
import { Routes, RouterModule } from '@angular/router';
import { MainPagePreviewComponent } from './components/presentationals/main-page-preview/main-page-preview.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'products',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  declarations: [MainPageComponent, MainPagePreviewComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class MainPageModule {}
