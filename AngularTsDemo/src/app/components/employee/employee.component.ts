import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

import { IEmployee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';


@Component({
  selector: 'employee-details',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnChanges, OnInit {
  employee: IEmployee | null;
  constructor(private _employeeService: EmployeeService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {
    this.employee = null;
  }

  ngOnInit(): void {
    let empCode = this._activatedRoute.snapshot.params['code'];
    this._employeeService.getEmployee(empCode).subscribe(result => {
      this.employee = result;
    }, err => console.error(err));
  }

  colSpan: number = 2;
  firstName: string = 'test';
  lastName: string = 'user';
  gender: string = 'male';
  age: number = 31;
  showDetails: boolean = false;
  name: string = 'Tom';
  twoWay: string = '';

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  textInput(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propertyName in changes) {
      let change = changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
      console.log(`${propertyName}: currentValue = ${current}, previousValue = ${previous}`);
    }
  }

  onBackClicked(): void {
    this._router.navigate(['/employees']);
    }
}
