import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(this.API_URL);
  }
}
