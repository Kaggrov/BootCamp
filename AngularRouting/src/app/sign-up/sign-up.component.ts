import { Component } from '@angular/core';
import { FormControl ,FormGroup, Validators} from '@angular/forms';
import { BlogServiceService } from '../services/blog-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private x:BlogServiceService,private route:Router){}
    signUpForm  =  new FormGroup({
      name : new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      pass:new FormControl('',[Validators.required,Validators.minLength(4)])
    })

    onSubmit = () => {
      console.log(this.signUpForm.value)
      this.x.addUser(this.signUpForm.value).subscribe(()=>{
        console.log("User Account Created");
      })
      this.x.login()
      localStorage.setItem('userDetails',JSON.stringify(this.signUpForm.value))
      window.alert("User Account Created Succesfully")
      this.route.navigate(['/'])

    }

    get name() { return this.signUpForm.get('name'); }
    get email() { return this.signUpForm.get('email'); }
    get pass() { return this.signUpForm.get('pass'); }
}
