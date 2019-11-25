import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent implements OnInit {
  @Input() set reflowChart(status: boolean) {
    this.reflow();
  }

  chartTarget: any;
  highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'column',
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
    subtitle: {
      text: null
    },
    xAxis: {
      labels: {
        enabled: false
      }
    },
    yAxis: {
      title: {
        text: null
      },
      max: 200,
      tickAmount: 7,
      labels: {
        enabled: false
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        color: '#82a1ff',
        groupPadding: 0
      }
    },
    series: [
      {
        colorByPoint: false,
        data: [
          {
            y: 20
          },
          {
            y: 50
          },
          {
            y: 80
          },
          {
            y: 120
          },
          {
            y: 50
          },
          {
            y: 40
          },
          {
            y: 20
          },
          {
            y: 40
          },
          {
            y: 20
          },
          {
            y: 50
          }
        ]
      }
    ]
  };

  constructor() {}

  ngOnInit() {}

  private reflow() {
    setTimeout(() => {
      this.chartTarget.setSize(null);
    }, 300);
  }
}
