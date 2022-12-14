export interface IEmployee {
  code: string;
  name: string;
  gender: string;
  annualSalary: number;
  dateOfBirth: Date;
}

export class Employee implements IEmployee {
  constructor(public code: string, public name: string, public gender: string, public annualSalary: number, public dateOfBirth: Date) { }
}
