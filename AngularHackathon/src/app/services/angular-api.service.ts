import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, map, mergeMap, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AngularApiService {

  endPointOrder = 'http://localhost:3000/orders';

  endPointUser = 'http://localhost:3000/users';
  private loggedIn = new BehaviorSubject<boolean>(
    false || localStorage.getItem('userDetails') != null
  );
  
  isLoggedIn = this.loggedIn.asObservable();

  newObject = window.localStorage.getItem('userDetails');
  userInfo = JSON.parse(this.newObject || '{}');

  constructor(private http: HttpClient, private route: Router) {}

  addMoney = (amount: any) => {
    return this.http.get<any[]>(this.endPointUser).pipe(
      switchMap((userData: any[]) => {
        const userToUpdate = userData.find(
          (user) => user.email === this.userInfo.email
        );

        if (!userToUpdate) {
          alert('User not found');
          throw new Error('User not found');
        }

        if (!userToUpdate.balance) {
          userToUpdate.balance = 0 ;
        }
        userToUpdate.balance = parseInt(userToUpdate.balance) + parseInt(amount);

        return this.http.put(
          this.endPointUser + '/' + this.userInfo.id,
          userToUpdate
        );
      })
    );
  };


  debitMoney = (amount: any) => {
    return this.http.get<any[]>(this.endPointUser).pipe(
      switchMap((userData: any[]) => {
        const userToUpdate = userData.find(
          (user) => user.email === this.userInfo.email
        );

        if (!userToUpdate) {
          alert('User not found');
          throw new Error('User not found');
        }

        if (!userToUpdate.balance) {
          alert('Less Balance ');
          throw new Error('Less Balance');
        }

        if(userToUpdate.balance < amount){
          alert('You are low on Balance ');
          throw new Error('You are low on Balance ');
        }
        userToUpdate.balance = parseInt(userToUpdate.balance) - parseInt(amount);

        return this.http.put(
          this.endPointUser + '/' + this.userInfo.id,
          userToUpdate
        );
      })
    );
  };


  addOrder = (order:any) => {
    return this.http.post(this.endPointOrder,order);
  }

  getOrders = () => {
    return this.http.get(this.endPointOrder);
  }

  addUser = (userData: any) => {
    userData['balance'] = 6000;
    return this.http.post(this.endPointUser, userData);
  };

  getUser = () => {
    return this.http.get(this.endPointUser);
  };

  login() {
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
  }

  get isLoggedFunIn(): boolean {
    console.log(this.loggedIn.value);
    if (this.loggedIn.value) {
      return true;
    } else {
      this.route.navigate(['/']);
      window.alert('Need To Login First');
      return false;
    }
  }
}
