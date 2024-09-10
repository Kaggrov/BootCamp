import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularApiService } from '../services/angular-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  availableUsers:any = [];
  currentUser = null;
  constructor(private x:AngularApiService,private route :Router){
    this.getAllUsers()
  }
  loginForm  =  new FormGroup({
    email: new FormControl('',Validators.required),
    pass:new FormControl('',Validators.required)
  })

  onSubmit = () => {
    console.log(this.loginForm.value)
    console.log(this.availableUsers)

    this.availableUsers.forEach((ele: any) => {
      if(ele.email == this.loginForm.value.email && ele.pass == this.loginForm.value.pass){
        this.currentUser = ele
      }
    });

    if(this.currentUser != null){
      localStorage.setItem('userDetails',JSON.stringify(this.currentUser))
      this.x.login()
      this.route.navigate(['/'])
    }
    else{
      window.alert("Enter correct credentials")
    }

  }

  getAllUsers = () => {
    this.x.getUser().subscribe((data)=>{
      this.availableUsers = data
    })
  }

  get email() {return this.loginForm.get('email') }
  get pass() {return this.loginForm.get('pass') }
}
