import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BlogServiceService {
  endPoint = 'http://localhost:3000/blogs';
  endPointUser = 'http://localhost:3000/users';
  private loggedIn = new BehaviorSubject<boolean>(
    false || localStorage.getItem('userDetails') != null
  );
  isLoggedIn = this.loggedIn.asObservable();

  newObject = window.localStorage.getItem('userDetails');
  userEmail = JSON.parse(this.newObject || '{}').email;

  constructor(private http: HttpClient, private route: Router) {}

  getBlogs = () => {
    return this.http.get(this.endPoint);
  };

  addBlog = (blogData: any) => {
    blogData['authorEmail'] = this.userEmail;
    return this.http.post(this.endPoint, blogData);
  };

  deleteBlog = (id: any) => {
    return this.http.delete(this.endPoint + '/' + id);
  };

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
