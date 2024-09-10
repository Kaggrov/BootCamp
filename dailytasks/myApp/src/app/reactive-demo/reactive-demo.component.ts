import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-reactive-demo',
  templateUrl: './reactive-demo.component.html',
  styleUrls: ['./reactive-demo.component.css']
})
export class ReactiveDemoComponent {

  user = ""
  loginform = new FormGroup({

      control1 :new FormControl(''),
      control2 :new FormControl('')

    })
    getDetails = ()=>{
      if(this.loginform.value.control1 == this.loginform.value.control2){
            this.user = "Valid User"
      }
      else{
        this.user = "Invalid User"
      }
    }
}
