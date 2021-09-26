import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-users-crud',
  templateUrl: './users-crud.component.html',
  styleUrls: ['./users-crud.component.css']
})
export class UsersCrudComponent implements OnInit {

  constructor( private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de usuários',
      icon: 'people',
      routeUrl: '/users'  
    }
   }

  ngOnInit(): void {
  }

}
