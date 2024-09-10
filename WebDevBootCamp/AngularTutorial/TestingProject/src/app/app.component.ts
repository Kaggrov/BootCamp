import { Component } from '@angular/core';
import { LoggerService } from './services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TestingProject';
  title1="TestingProject app is running!"
  addition=""
  counter=1
  name="Karttekay"
  currentName="Karttekay"

  constructor(private x:LoggerService){}

  addButton(a:any,b:any){
    if(a+b<50){
      this.addition="Less than 50"
    }
    else{
      this.addition="More than 50"
    }
  }

  increase(){
      this.counter = this.counter+1
  } 
  decrease(){
    this.counter = this.counter-1;
  }

  changeName = ()=>{
      this.currentName = "Name Changed";
  }
}
