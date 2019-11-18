import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  @ViewChild('drawer', { static: false }) drawer: MatDrawer;
  drawerClosed: boolean;
  currentRoute: string;

  constructor(private router: Router) {
    this.defineCurrentRoute();
  }

  ngOnInit() {}

  changeDrawerState(action: 'open' | 'close') {
    this.drawer.toggle();
    if (action === 'open') {
      this.drawerClosed = false;
      return;
    }
    setTimeout(() => {
      this.drawerClosed = true;
    }, 150);
  }

  private defineCurrentRoute() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        console.log(event.urlAfterRedirects);
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }
}
