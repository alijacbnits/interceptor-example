import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loader = new BehaviorSubject<Boolean>(false);

  getTodos():Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/todos/");
  }

  getPosts():Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts/");
  }
}
