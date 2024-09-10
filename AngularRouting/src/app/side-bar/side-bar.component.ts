import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

   value = JSON.parse(localStorage.getItem('userDetails')|| '{}')
   
   userName = this.value.name
}
