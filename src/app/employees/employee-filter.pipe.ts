import { PipeTransform, Pipe } from "../../../node_modules/@angular/core";
import { Employee } from "../models/employee.model";
import { serializePath } from "../../../node_modules/@angular/router/src/url_tree";

@Pipe({
    name : "employeeFilter"
})
export class EmployeeFilterPipe implements PipeTransform {
    transform(employees: Employee[], searchText: string): Employee[] {
        if(!employees || !searchText) {
            return employees;
        }
        return employees.filter(emp => emp.name.indexOf(searchText) != -1);
    }
}