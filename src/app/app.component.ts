import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user : User;
  search : string = "";
  ngOnInit () {
    this.user = new User();
    this.user.name = "new Name";
    this.user.address = "23432,dsfgdfsgds";
    this.user.numbers = [
      '345435-34543-345345',
      '345435-34543-345345'
    ];
  }
}
