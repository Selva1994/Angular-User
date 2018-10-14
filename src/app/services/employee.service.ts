import { Injectable } from "../../../node_modules/@angular/core";
import { Employee } from "../models/employee.model";

@Injectable()
export class EmployeeService {

    private employees: Employee[] = [
        {
          id: 1,
          name: "Selva1",
          gender: "Male",
          email: "xyz@gmail.com",
          phone: 91023432,
          dob: new Date("01/03/2018"),
          photoPath: "./assets/photo.jpg"
        },
        {
          id: 2,
          name: "Selva2", 
          gender: "Male",
          email: "xyz@gmail.com",
          phone: 91023432,
          dob: new Date("05/04/2018"),
          photoPath: "./assets/photo.jpg"
        },
        {
            id: 3,
            name: "Selva3", 
            gender: "Male",
            email: "xyz@gmail.com",
            phone: 91023432,
            dob: new Date("4/2/2018"),
            photoPath: "./assets/photo.jpg"
          }
      ];

    getEmployees(): Employee[] {
        return this.employees;
    }

    saveEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    getEmployeeById(id: number): Employee {
        return this.employees.find(emp => emp.id == id);
    }
}