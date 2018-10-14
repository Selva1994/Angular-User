import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  private _id: number;
  emp: Employee;
  constructor(private employeeService: EmployeeService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this._id = +params.get("id");
      this.emp = this.employeeService.getEmployeeById(+params.get("id"));
    });
    console.log(this.emp);
    // this.emp = this.employeeService.getEmployeeById(+this._route.snapshot.params['id']);
  }

  viewNextEmployee() {
     if(this._id <=3) {
       if(this._id == 3){
         this._id = 1;
       }else{
         this._id =this._id + 1;
       }
       
    this._router.navigate(["/employees",this._id]);
     }
  }

}
