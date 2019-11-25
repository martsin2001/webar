import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/containers/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ChartToolbarComponent } from './components/presentationals/chart-toolbar/chart-toolbar.component';
import { LineChartComponent } from './components/presentationals/line-chart/line-chart.component';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';

@NgModule({
  declarations: [
    DashboardComponent,
    ChartToolbarComponent,
    LineChartComponent,
    HighchartsChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DashboardComponent }]),
    ChartModule
  ]
})
export class DashboardModule { }
