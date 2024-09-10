import { Component } from '@angular/core';
import { LogoService } from '../services/logo.service';

@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent {

    logo:any;
    constructor(private l:LogoService){

      this.logo = l.addLogo();
    }
    
}
