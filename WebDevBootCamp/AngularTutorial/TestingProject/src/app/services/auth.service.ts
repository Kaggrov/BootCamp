import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authenticate(){
    localStorage.setItem('user','Natwest');
  }

  checkAuthentication(){
    return localStorage.getItem('user') == "Natwest"
  }
}
