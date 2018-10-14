import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { UpperCasePipe } from '@angular/common';




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : any;
  errorMessage: any;
  constructor(private dataService : DataService) {
    this.dataService.getData().subscribe((response) => {
      this.users = response;
    },(error) => {
      this.errorMessage = error.message;
    }
  );

    this.dataService.getJsonData()
    .subscribe(data => {
      console.log(data[0].title);
    });

    this.dataService.getJsonPost().subscribe((response) => {
console.log(response);
    });

   }

  ngOnInit() {
  }

}
