import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularApiService } from '../services/angular-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLoggedIn = false;
  constructor(private route: Router, public x: AngularApiService) {
    this.x.isLoggedIn.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  dash = () => {
    this.route.navigate(['/dashboard']);
  };

  signUp = () => {
    this.route.navigate(['/signUp']);
  };
  login = () => {
    this.route.navigate(['/login']);
  };
  logout = () => {
    localStorage.removeItem('userDetails');
    this.x.logout();
    this.route.navigate(['/']);
  };
}
