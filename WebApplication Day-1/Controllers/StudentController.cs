using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication_Day_1.Models;

namespace WebApplication_Day_1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentController : ControllerBase
    {
        private List<StudentModel> Students = new List<StudentModel>() {
            new StudentModel() { StudentId = 1, StudentName = "John Doe" },
            new StudentModel() { StudentId = 2, StudentName = "John Smith" }
        };

        [HttpGet("{studentId}")]
        public StudentModel Get(int studentId)
        {
            return Students.FirstOrDefault(m => m.StudentId == studentId);
        }

        [HttpPost("{studentId}")]
        public StudentModel Post(int studentId)
        {
            return Students.FirstOrDefault(m => m.StudentId == studentId);
        }

        [HttpPost()]
        public StudentModel PostComplex([FromQuery] StudentModel model)
        {
            return Students.FirstOrDefault(m => m.StudentId == model.StudentId);
        }
    }
}
