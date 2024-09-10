import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogoService {
  

  endPoint = "http://localhost:3000/users"
  isLoggedIn=false
  constructor(private end:HttpClient) { }

  addLogo = () => {
    return "https://www.ibm.com/content/dam/adobe-cms/case-studies/en/sites/default/files/2023-03-03/natwest_logo.jpeg";
  }

  getUsers = () => {
    return this.end.get(this.endPoint);
  }

  addUser = () => {
    return this.end.post(this.endPoint,{
      id:12,
      name:'Karttekay'
    })
  }

  login = () => {
    this.isLoggedIn = true;
  }

  isAuthenticated = () => { //For Guards Example
    if(this.isLoggedIn){
      return true;
    }
    window.alert("Need to Login")
    return false;
  }

}
