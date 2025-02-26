using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ZAHikes.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetALLStudents()
        {
            string[] studentNames = new string[] { "Joe", "Mbali", "Khanyi", "Faith", "Sindi" };
            return Ok(studentNames);
        }
    }
}
