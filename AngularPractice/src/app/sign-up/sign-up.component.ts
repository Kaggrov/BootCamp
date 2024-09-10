import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieApiService } from '../services/movie-api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private x:MovieApiService,private route:Router){}
    signUpForm  =  new FormGroup({
      name : new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,this.customEmailValidator]),
      pass:new FormControl('',[Validators.required,Validators.minLength(4)]),
      accountNo:new FormControl('',[Validators.required,Validators.minLength(11),this.customAccountNumberValidator]),
      mobileNo:new FormControl('',[Validators.required,Validators.minLength(10)]),
     
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

    customAccountNumberValidator(control: { value: any; }) {
      const accountNumber = control.value;
      if (!accountNumber.startsWith('0000')) {
        return { invalidAccountNumber: true };
      }
      return null;
    }

    get name() { return this.signUpForm.get('name'); }
    get email() { return this.signUpForm.get('email'); }
    get pass() { return this.signUpForm.get('pass'); }
    get accountNo(){ return this.signUpForm.get('accountNo'); }
    get mobileNo(){ return this.signUpForm.get('mobileNo'); }

}
