using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ZAHikes.API.Data;
using ZAHikes.API.Models.Domain;

namespace ZAHikes.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProvinceController : ControllerBase
    {
        private readonly ZAHikesDbContext dbContext;
        public ProvinceController(ZAHikesDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            var province = dbContext.Provinces.ToList();
            return Ok(province);
        }
    }
}
