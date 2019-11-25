import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { GeneralService } from 'src/app/core/services/general.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  @ViewChild('drawer', { static: false }) drawer: MatDrawer;
  drawerClosed: any;
  currentRoute: string;

  constructor(private router: Router, private generalService: GeneralService) {
    this.defineCurrentRoute();
    this.drawerClosed = this.generalService.isDrawerClosed;
  }

  ngOnInit() { }

  changeDrawerState(action: 'open' | 'close') {
    this.drawer.toggle();
    if (action === 'open') {
      this.generalService.isDrawerClosed.next(false);
      return;
    }
    setTimeout(() => {
      this.generalService.isDrawerClosed.next(true);
    }, 150);
  }

  private defineCurrentRoute() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }
}
