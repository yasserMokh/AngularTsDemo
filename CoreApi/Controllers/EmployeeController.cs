using CoreApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;
using System.Xml.Linq;

namespace CoreApi.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly Employee[] employees = new Employee[]
        {
           new Employee(){ Code="emp101", Name="Tom", Gender="Male", AnnualSalary=5500, DateOfBirth = new DateTime(1988,6,6) },
           new Employee(){ Code= "emp102", Name= "Alex", Gender= "Male", AnnualSalary= 5700.95, DateOfBirth= new DateTime(1982, 6, 9) },
           new Employee(){ Code= "emp103", Name= "Mike", Gender= "Male", AnnualSalary= 5900, DateOfBirth= new DateTime(1979, 8, 12) },
           new Employee(){ Code= "emp104", Name= "Mary", Gender= "Female", AnnualSalary= 6500.826, DateOfBirth= new DateTime(1980, 10, 1) },
           new Employee(){ Code= "emp105", Name= "So", Gender= "Female", AnnualSalary= 8500.826, DateOfBirth= new DateTime(1990, 10, 1)}
        };

        [HttpGet(Name = "GetEmployees")]
        public IEnumerable<Employee> Get()
        {
            return employees;
        }
    }
}
