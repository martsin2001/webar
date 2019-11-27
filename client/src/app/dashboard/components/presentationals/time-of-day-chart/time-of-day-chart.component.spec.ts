import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOfDayChartComponent } from './time-of-day-chart.component';

describe('TimeOfDayChartComponent', () => {
  let component: TimeOfDayChartComponent;
  let fixture: ComponentFixture<TimeOfDayChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeOfDayChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeOfDayChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
