import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  constructor(private x:AuthService){
    x.authenticate();
  }

  getMySalarySlip = () => {
    if(this.x.checkAuthentication()){
          return "You are an authorized Emloyee";
    }
    else{
      return "Un-authorized Employee"
    }
  }

}
