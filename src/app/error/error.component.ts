import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
@Input() error;
visible = true;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
    this.visible =false;
    }, 3000);
  }

}
