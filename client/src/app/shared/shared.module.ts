import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { MainNavigationComponent } from './main-navigation/main-navigation.component';
import { DashboardPreviewComponent } from './dashboard-preview/dashboard-preview.component';
import { MaterialModule } from '../core/modules/material.module';
import { RouterModule } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';

const SHARED_COMPONENTS = [
  NavigationComponent,
  MainNavigationComponent,
  DashboardPreviewComponent,
  UserPanelComponent
];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  exports: [...SHARED_COMPONENTS],
  imports: [CommonModule, MaterialModule, RouterModule]
})
export class SharedModule {}
