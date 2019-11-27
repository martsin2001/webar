import { Component, OnInit } from '@angular/core';

enum Day {
  sun = 'sun',
  mon = 'mon',
  tue = 'tue',
  wed = 'wed',
  thu = 'thu',
  fri = 'fri',
  sat = 'sat'
}

class ChartSeries {
  constructor(public day: Day, public time: { hour: string; workTime: string }[]) {}
}

@Component({
  selector: 'app-time-of-day-chart',
  templateUrl: './time-of-day-chart.component.html',
  styleUrls: ['./time-of-day-chart.component.scss']
})
export class TimeOfDayChartComponent implements OnInit {
  chart: ChartSeries[] = [];
  days: Day[] = [Day.sun, Day.mon, Day.tue, Day.wed, Day.thu, Day.fri, Day.sat];

  constructor() {}

  ngOnInit() {
    this.initChart();
  }

  private initChart() {
    for (const item of this.days) {
      const time = this.initTime();
      this.chart.push(new ChartSeries(item, time));
    }
  }

  private initTime(): { hour: string; workTime: string }[] {
    const hours = [12, ...Object.keys(new Array(12).fill(0)).filter((e, i) => i > 0)];
    return [
      ...hours.map(h => ({ hour: h + ' am', workTime: this.initWorkTime() })),
      ...hours.map(h => ({ hour: h + ' pm', workTime: this.initWorkTime() }))
    ] as { hour: string; workTime: string }[];
  }

  private initWorkTime(): string {
    const range = ['#d8e2ff', '#b3c6ff', '#82a1ff', '#4564c1'];
    return range[Math.floor(Math.random() * range.length)];
  }
}
