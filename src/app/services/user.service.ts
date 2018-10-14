import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : User;

  constructor() {
    this.user = new User();
    this.user.name = "new Name";
    this.user.address = "23432,dsfgdfsgds";
    this.user.numbers = [
      '345435-34543-345345',
      '345435-34543-345345'
    ];
  }

  getUser() {
    return this.user;
  }

}
