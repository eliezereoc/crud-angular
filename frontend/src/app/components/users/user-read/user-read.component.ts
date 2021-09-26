import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Users } from '../users.model';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  users: Users[] = [];

  displayedColumns = ['id', 'name', 'email', 'action'];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.read().subscribe(users => {
      this.users = users;
      // console.log(users);      
    })
  }

}
