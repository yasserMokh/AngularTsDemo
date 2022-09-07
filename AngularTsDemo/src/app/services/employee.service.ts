import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Employee, IEmployee } from '../models/employee.model';

@Injectable()
export class EmployeeService {

  constructor(private _httpClient: HttpClient) { }

  getAllEmployees(): Observable<IEmployee[]> {
    return this._httpClient.get<IEmployee[]>('/employee');
  }

  //getAllEmployees(): IEmployee[] {
  //  return [
  //    new Employee('emp101', 'Tom', 'Male', 5500, new Date('6/6/1988'))
  //    //{
  //    //  code: 'emp101', name: 'Tom', gender: 'Male',
  //    //  annualSalary: 5500, dateOfBirth: new Date('6/6/1988')
  //    //}
  //    ,
  //    {
  //      code: 'emp102', name: 'Alex', gender: 'Male',
  //      annualSalary: 5700.95, dateOfBirth: new Date('9/6/1982')
  //    },
  //    {
  //      code: 'emp103', name: 'Mike', gender: 'Male',
  //      annualSalary: 5900, dateOfBirth: new Date('12/8/1979')
  //    },
  //    {
  //      code: 'emp104', name: 'Mary', gender: 'Female',
  //      annualSalary: 6500.826, dateOfBirth: new Date('1/10/1980')
  //    },
  //    {
  //      code: 'emp105', name: 'So', gender: 'Female',
  //      annualSalary: 8500.826, dateOfBirth: new Date('1/10/1990')
  //    }];
  //}
}
