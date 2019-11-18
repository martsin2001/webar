import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './componenets/main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../core/modules/material.module';
import { Routes, RouterModule } from '@angular/router';

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
      }
    ]
  }
];

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class MainPageModule {}
