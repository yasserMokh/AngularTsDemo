using System.Security.Cryptography.X509Certificates;

namespace CoreApi.Models
{
    public class Employee
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public double AnnualSalary { get; set; }
        public DateTime DateOfBirth { get; set; }
    }
}
