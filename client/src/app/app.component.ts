import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('drawer', { static: false }) drawer: MatDrawer;
  drawerClosed: boolean;

  constructor() {}

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
}
