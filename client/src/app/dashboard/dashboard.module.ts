import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/containers/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { ChartToolbarComponent } from './components/presentationals/chart-toolbar/chart-toolbar.component';
import { LineChartComponent } from './components/presentationals/line-chart/line-chart.component';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';
import { ColumnChartComponent } from './components/presentationals/column-chart/column-chart.component';
import { TimeOfDayChartComponent } from './components/presentationals/time-of-day-chart/time-of-day-chart.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ChartToolbarComponent,
    LineChartComponent,
    HighchartsChartComponent,
    ColumnChartComponent,
    TimeOfDayChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: DashboardComponent }]),
    ChartModule
  ]
})
export class DashboardModule { }
