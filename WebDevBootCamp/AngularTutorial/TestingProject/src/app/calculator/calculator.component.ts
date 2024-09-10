import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
    constructor(private x:LoggerService){}

    add(a:any,b:any){
        this.x.log("Add operation Done");
        // console.log("Add",this.x.messages)
        return a+b;
    }

    subtract(a:any,b:any){
      this.x.log("Subtract operation Done");
      return a-b;
    }
}
