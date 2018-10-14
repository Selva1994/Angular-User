import { Injectable } from "../../../node_modules/@angular/core";
import { CanDeactivate } from "../../../node_modules/@angular/router";
import { CreateEmployeeComponent } from "./create-employee.component";

@Injectable()
export class EmployeeCanDeActivateGuard implements CanDeactivate<CreateEmployeeComponent> {
    canDeactivate(component: CreateEmployeeComponent): boolean {
        if(component.empForm.dirty) {
            return confirm("Are you sure?");
        }
        return true;
    }
}