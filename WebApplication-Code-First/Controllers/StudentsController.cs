using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApplication_DB_First.Models;

namespace WebApplication_DB_First.Controllers
{
    [ApiController]
    [Route("[controller")]
    public class StudentsController : ControllerBase
    {
        private readonly ApplicationContext _applicationContext;

        public StudentsController(ApplicationContext applicationContext)
        {
            _applicationContext = applicationContext;
        }
    }
}
