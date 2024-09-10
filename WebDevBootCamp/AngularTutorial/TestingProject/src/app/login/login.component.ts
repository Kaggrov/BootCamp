import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  availableUsers:any = [];
  currentUser = null
  constructor(private route :Router){
    
  }
  loginForm  =  new FormGroup({
    email: new FormControl('',Validators.required),
    pass:new FormControl('',Validators.required)
  })

  onSubmit = () => {

  }



  get email() {return this.loginForm.get('email') }
  get pass() {return this.loginForm.get('pass') }
}
