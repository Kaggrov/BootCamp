import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, map, mergeMap, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  endPoint = 'http://localhost:3000/movies';
  endPointUser = 'http://localhost:3000/users';
  private loggedIn = new BehaviorSubject<boolean>(
    false || localStorage.getItem('userDetails') != null
  );
  isLoggedIn = this.loggedIn.asObservable();

  newObject = window.localStorage.getItem('userDetails');
  userInfo = JSON.parse(this.newObject || '{}');

  constructor(private http: HttpClient, private route: Router) {}

  getMovies = () => {
    return this.http.get(this.endPoint);
  };

  bookMovie = (movieInfo: any) => {
    return this.http.get<any[]>(this.endPointUser).pipe(
      switchMap((userData: any[]) => {
        const userToUpdate = userData.find(
          (user) => user.email === this.userInfo.email
        );

        if (!userToUpdate) {
          alert('User not found');
          throw new Error('User not found');
        }

        if (!userToUpdate.movies) {
          userToUpdate.movies = [];
        }
        userToUpdate.movies.push(movieInfo);

        return this.http.put(
          this.endPointUser + '/' + this.userInfo.id,
          userToUpdate
        );
      })
    );
  };

  cancelBooking(movieName: string) {
    return this.http.get<any[]>(this.endPointUser).pipe(
      switchMap((userData: any[]) => {
        const userToUpdate = userData.find(
          (user) => user.email === this.userInfo.email
        );

        if (!userToUpdate) {
          throw new Error('User not found');
        }

        const movieToCancelIndex = userToUpdate.movies.findIndex(
          (movie: { name: string }) => movie.name === movieName
        );

        if (movieToCancelIndex === -1) {
          alert("Movie not found in user bookings")
          throw new Error('Movie not found in user bookings');
        }

        const refundAmount =
          userToUpdate.movies[movieToCancelIndex].Totalprice / 2;

        userToUpdate.movies.splice(movieToCancelIndex, 1);
        userToUpdate.refundAmount = refundAmount;

        return this.http.put(
          this.endPointUser + '/' + this.userInfo.id,
          userToUpdate
        );
      })
    );
  }

  addUser = (userData: any) => {
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
