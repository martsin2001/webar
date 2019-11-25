import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/core/services/general.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isDrawerClosed: BehaviorSubject<boolean>;

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.includeDrawerStatus();
  }

  private includeDrawerStatus() {
    this.isDrawerClosed = this.generalService.isDrawerClosed;
  }

}
