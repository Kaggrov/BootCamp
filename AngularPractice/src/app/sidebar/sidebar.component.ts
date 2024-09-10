import { Component } from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private r:Router){}
  value = JSON.parse(localStorage.getItem('userDetails')|| '{}')
  
  userName = this.value.name

  isActive(path: string): boolean {
    return this.r.url === path;
  }
}
