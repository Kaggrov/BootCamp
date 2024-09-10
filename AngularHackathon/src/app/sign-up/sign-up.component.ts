import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularApiService } from '../services/angular-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private x:AngularApiService,private route:Router){}
  signUpForm  =  new FormGroup({
    name : new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,this.customEmailValidator]),
    pass:new FormControl('',[Validators.required,Validators.minLength(4)]),
    accountNo:new FormControl('',[Validators.required,Validators.minLength(11)]),
    mobileNo:new FormControl('',[Validators.required,Validators.minLength(10)]),
    address:new FormControl('',[Validators.required]),
    
  })

  onSubmit = () => {
    console.log(this.signUpForm.value)
    this.x.addUser(this.signUpForm.value).subscribe((data:any)=>{
      console.log(data)
      localStorage.setItem('userDetails',JSON.stringify(data))
      console.log("User Account Created");
    })
    this.x.login()
    
    window.alert("User Account Created Succesfully")
    this.route.navigate(['/'])

  }

  customEmailValidator(control: { value: string; }) {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailPattern.test(control.value)) {
      return { invalidEmail: true };
    }
    return null;
  }


  get name() { return this.signUpForm.get('name'); }
  get email() { return this.signUpForm.get('email'); }
  get pass() { return this.signUpForm.get('pass'); }
  get accountNo(){ return this.signUpForm.get('accountNo'); }
  get mobileNo(){ return this.signUpForm.get('mobileNo'); }
  get address(){ return this.signUpForm.get('address'); }


}
