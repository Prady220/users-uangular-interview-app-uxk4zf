import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Address, User } from './app.model';
import { UserService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  public users: User[] = [];
  public filteredUsers: User[] = [];
  searchName: String;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsersFromService();
  }

  getUsersFromService() {
    this.userService.getUsers().subscribe(res => {
      this.users = res;
      this.filteredUsers = this.users;
    });
  }

  filterUsers(searchTerm) {
    this.filteredUsers = this.users.filter(user => {
      return user.name.toLowerCase().includes(searchTerm);
    });
  }
}
