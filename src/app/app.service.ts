import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address, User } from './app.model';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  rawUsers = [];
  users: User[] = [];
  user: User;
  address: Address;

  getUsers() {
    return this.http.get(this.API_URL).pipe(
      map(res => {
        this.rawUsers = res as [];
        this.rawUsers.forEach(u => {
          this.users.push(this.convertToModel(u));
        });
        return this.users;
      })
    );
  }

  convertToModel(user: User) {
    this.address = new Address(
      user.address.street,
      user.address.suite,
      user.address.city,
      user.address.zipcode
    );
    this.user = new User(user.name, this.address);
    return this.user;
  }
}
