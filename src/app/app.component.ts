import { Component, OnInit } from '@angular/core';
import { Address, User } from './app.model';
import { UserService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public rawUsers = [];
  public users: User[] = [];
  public filteredUsers: User[] = [];
  searchName: String;
  user: User;
  address: Address;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(res => {
      console.log(res.toString());
      this.rawUsers = res as [];
      this.rawUsers.forEach(u => {
        this.users.push(this.convertToModel(u));
      });
      this.filteredUsers = this.users;
      console.log(this.filteredUsers);
    });
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

  filterUsers(searchTerm) {
    this.filteredUsers = this.users.filter(user => {
      return user.name.toLowerCase().includes(searchTerm);
    });
  }
}
