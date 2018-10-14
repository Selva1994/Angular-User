import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[];
  empToDisplay: Employee;
  currentEmployeeIndex = 0;
  cardName: any;
  searchText: string;
  constructor(private _employeeService: EmployeeService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.empToDisplay = this.employees[0];
  }

  nextEmployee() {
    if (this.currentEmployeeIndex <= 2) {
      if (this.currentEmployeeIndex == this.employees.length-1) {

        this.currentEmployeeIndex = 0;
        this.empToDisplay = this.employees[this.currentEmployeeIndex];
      } else {
        this.currentEmployeeIndex++;
        this.empToDisplay = this.employees[this.currentEmployeeIndex];
      }
    }
  }

  handleNotifyEmpChild(employee: Employee) {
    this.cardName = employee.name + " " + employee.id
  }

  showEmployee(employeeId: number) {
    this._router.navigate(["/employees",employeeId]);

  }

}
