import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { POST } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

  getPosts() {
    return this.http.get<POST[]>(`https://jsonplaceholder.typicode.com/posts`);
  }

  deletePost(post: POST) {
    return this.http.delete(
      `https://jsonplaceholder.typicode.com/post/${post.id}`
    );
  }
}
