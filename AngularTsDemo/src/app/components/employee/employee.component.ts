import { Component } from '@angular/core'

@Component({
  selector: 'employee-details',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent {
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

}
