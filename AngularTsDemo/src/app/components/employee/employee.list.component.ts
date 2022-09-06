import { Component } from '@angular/core'
import { Employee, IEmployee } from '../../models/employee.model';

@Component({
  selector: 'employee-list',
  templateUrl: './employee.list.component.html'
})
export class EmployeeListComponent {
  allEmployees: IEmployee[];
  employees: IEmployee[];
  selectedGender: string = 'all';

  constructor() {
    this.allEmployees = [
      new Employee('emp101', 'Tom', 'Male', 5500, new Date('6/6/1988'))
      //{
      //  code: 'emp101', name: 'Tom', gender: 'Male',
      //  annualSalary: 5500, dateOfBirth: new Date('6/6/1988')
      //}
      ,
      {
        code: 'emp102', name: 'Alex', gender: 'Male',
        annualSalary: 5700.95, dateOfBirth: new Date('9/6/1982')
      },
      {
        code: 'emp103', name: 'Mike', gender: 'Male',
        annualSalary: 5900, dateOfBirth: new Date('12/8/1979')
      },
      {
        code: 'emp104', name: 'Mary', gender: 'Female',
        annualSalary: 6500.826, dateOfBirth: new Date('1/10/1980')
      },
      {
        code: 'emp105', name: 'So', gender: 'Female',
        annualSalary: 8500.826, dateOfBirth: new Date('1/10/1990')
      }];
    this.employees = this.filterEmployeesByGender(this.allEmployees, this.selectedGender);
  }

  filterEmployeesByGender(allEmp: any[], gender: string): any[] {
    if (gender.toLocaleLowerCase() === 'all') {
      return allEmp;
    }
    return allEmp.filter(e => e.gender.toLowerCase() === gender);
  }

  empTrackByCode(index: number, emp: any): string {
    return emp.code;
  }

  getTotalEmployeesCount(): number {
    return this.allEmployees.length;
  }

  getMaleEmployeesCount(): number {
    return this.allEmployees.filter(e=>e.gender.toLowerCase()==='male').length;
  }

  getFemaleEmployeesCount(): number {
    return this.allEmployees.filter(e => e.gender.toLowerCase() === 'female').length;
  }

  onGenderSelectionChanged(selectedGender: string): void {
    this.selectedGender = selectedGender;
    this.employees = this.filterEmployeesByGender(this.allEmployees, this.selectedGender);
  }

}
