import { Component, OnChanges, SimpleChanges } from '@angular/core'

@Component({
  selector: 'employee-details',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnChanges {

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
}
