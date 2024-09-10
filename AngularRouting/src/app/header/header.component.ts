import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BlogServiceService } from '../services/blog-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLoggedIn = false;
  constructor(private route: Router, public x: BlogServiceService) {
    this.x.isLoggedIn.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

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
