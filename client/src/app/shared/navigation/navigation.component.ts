import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/auth/core/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  displayAuthButtons: boolean;

  constructor(private router: Router, private auth: AuthService) {
    this.subscribeToRouter();
  }

  ngOnInit() {}

  private subscribeToRouter() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        if (this.router.isActive('auth', false)) {
          this.displayAuthButtons = true;
        } else {
          this.displayAuthButtons = false;
        }
      }
    });
  }
}
