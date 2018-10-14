import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {

  selectedEmp: number;
  @Input() emp: Employee;
  @Output() notifyEmp : EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.selectedEmp = +this.route.snapshot.paramMap.get("id");
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  handleNotifyEmp() {
    this.notifyEmp.emit(this.emp);
  }
}
