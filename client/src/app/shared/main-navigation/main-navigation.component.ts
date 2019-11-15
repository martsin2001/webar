import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterEvent,
  NavigationEnd
} from '@angular/router';

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
  navigationItems: NavItem[] = [
    { icon: 'dashboard.svg', route: 'dashboard', selected: false },
    { icon: 'product.svg', route: 'products', selected: false },
    { icon: 'library.svg', route: 'library', selected: false },
    { icon: 'pie-chart.svg', route: '', selected: false },
    { icon: 'video.svg', route: '', selected: false },
    { icon: 'group.svg', route: '', selected: false },
    { icon: 'shop.svg', route: '', selected: false }
  ];
  currentRoute: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.defineCurrentRoute();
  }

  selectItem(item: NavItem) {
    this.navigationItems.forEach(
      (navitem: NavItem) => (navitem.selected = false)
    );
    item.selected = true;
  }

  private defineCurrentRoute() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }
}
