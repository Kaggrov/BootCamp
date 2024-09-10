import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { 
    
  }

  messages:any = []

  log(m:any){
    console.log("Message",m)
    
    this.messages.push(m)
    console.log(this.messages)
  }
  clearLog(){
    this.messages = []
  }
}
