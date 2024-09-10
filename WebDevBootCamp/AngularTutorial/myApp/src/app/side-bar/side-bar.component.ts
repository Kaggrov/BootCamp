import { Component } from '@angular/core';
import { LogoService } from '../services/logo.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  logo:any;
    constructor(private l:LogoService){

      this.logo = l.addLogo();
    }
}
