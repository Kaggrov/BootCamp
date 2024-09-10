import { Component } from '@angular/core';
import { LogoService } from '../services/logo.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    logo:any;
    constructor(private l:LogoService){

      this.logo = l.addLogo();
    }
}
