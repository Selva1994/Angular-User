import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  errorMessage: string;
  imgUrl: string = "./assets/photo.jpg";
  color = "blue";
  data = [{
    id: 3,
    name: "xyz",
    amt: 1000.234325,
    dob: new Date("1/2/1000")
  }];
  users: Object;

  constructor(private _http: HttpClient,private _router: Router) {
  }

  ngOnInit() {
    // this.getUsers();
  }

  onClick() {
    this.data.push(
      {
        id: 1,
        name: "abc",
        amt: 20423.23432,
        dob: new Date()
      }
    );
  }
  code(index: number, d: any) {
    return d.id;
  }

  getUsers() {
    this._http.get("https://jsonplaceholder.typicode.com/users")
      .subscribe((users) => {
        console.log(users);
        this.users = users;
      },
        (error:any ) => {
          this.errorMessage = <string> error.message;
          // this._router.navigate(["/error",this.errorMessage]);
        });
  }

}
