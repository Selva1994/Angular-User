import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'address',
  templateUrl: './address.component.html'
})
export class AddressComponent implements OnInit {

  user : User;
  routeId : number;
  constructor(private userService : UserService, private dataService : DataService, route : ActivatedRoute){
  this.routeId = route.snapshot.params['id'];
  }
  ngOnInit(){
    this.user = this.userService.getUser();
    this.dataService.getData();
  }

}
