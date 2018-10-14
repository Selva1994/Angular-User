import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../models/employee.model';
import { NgForm } from '../../../node_modules/@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('empForm') 
  public empForm: NgForm;
  
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: "",
    phone: null,
    dob: null
  }
  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit() {
  }

  createEmployee() {
    let newEmployee: Employee = Object.assign({},this.employee);
    this._employeeService.saveEmployee(newEmployee);
    this.empForm.reset();
    this._router.navigate(['list']);
  }

}
