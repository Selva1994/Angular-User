import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http : HttpClient) {
  }
  getData() {
    return this.http.get('https://api.github.com/users');
  }

  getJsonData() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  getJsonPost() {
    return this.http.post(
      'https://jsonplaceholder.typicode.com/posts',
      JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      })
    );
  }

}