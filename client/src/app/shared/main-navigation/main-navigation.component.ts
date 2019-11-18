import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

interface NavItem {
  icon: string;
  route?: string;
  selected: boolean;
}

@Component({
  selector: 'app-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.scss']
})
export class MainNavigationComponent implements OnInit {
  @Input() currentRoute: string;
  navigationItems: NavItem[] = [
    { icon: 'dashboard.svg', route: 'dashboard', selected: false },
    { icon: 'product.svg', route: 'products', selected: false },
    { icon: 'library.svg', route: 'library', selected: false },
    { icon: 'pie-chart.svg', route: '', selected: false },
    { icon: 'video.svg', route: '', selected: false },
    { icon: 'group.svg', route: '', selected: false },
    { icon: 'shop.svg', route: '', selected: false }
  ];

  constructor() {}

  ngOnInit() {}

  selectItem(item: NavItem) {
    this.navigationItems.forEach(
      (navitem: NavItem) => (navitem.selected = false)
    );
    item.selected = true;
  }
}
