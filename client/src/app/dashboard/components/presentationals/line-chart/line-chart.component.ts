import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {
  @Input() set reflowChart(status: boolean) {
    this.reflow();
  }

  chartTarget: any;
  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'line',
      renderTo: 'chart',
      defaultSeriesType: 'areaspline',
      events: {
        render: event => {
          if (!this.chartTarget) {
            this.chartTarget = event.target;
          }
        },
        load: event => {
          setTimeout(() => {
            event.target.reflow();
          });
        }
      }
    },
    title: {
      text: null
    },
    xAxis: {
      categories: ['Oct 30', 'Oct 31', 'Nov 1', 'Nov 2', 'Nov 3', 'Nov 4', 'Nov 5']
    },
    yAxis: {
      title: {
        text: null
      },
      opposite: true,
      max: 200
    },
    tooltip: {
      valueSuffix: ' °C'
    },
    series: [
      {
        name: 'Tokyo',
        data: [50, 60, 180, 160, 140, 170, 90],
        marker: {
          enabled: false
        },
        color: '#82a1ff'
      },
      {
        name: 'New York',
        data: [55, 80, 120, 130, 170, 165, 80],
        marker: {
          enabled: false,
          symbol: 'circle'
        },
        color: '#82a1ff',
        dashStyle: 'Dash'
      }
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxHeight: 300
          },
          chartOptions: {
            legend: {
              enabled: false
            }
          }
        }
      ]
    }
  };

  constructor() {}

  ngOnInit() {}

  private reflow() {
    setTimeout(() => {
      this.chartTarget.setSize(null);
    }, 300);
  }
}
