import { Component, OnInit } from '@angular/core'
import { Employee, IEmployee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee.list.component.html',
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  allEmployees: IEmployee[];
  employees: IEmployee[];
  selectedGender: string = 'all';

  constructor(private _employeeService: EmployeeService) {
    this.allEmployees = [];
    this.employees = [];
  }
    ngOnInit(): void {
      this.allEmployees = this._employeeService.getAllEmployees();
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
