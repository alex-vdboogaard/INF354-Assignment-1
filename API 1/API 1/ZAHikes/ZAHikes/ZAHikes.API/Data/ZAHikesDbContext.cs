using Microsoft.EntityFrameworkCore;
using ZAHikes.API.Models.Domain;

namespace ZAHikes.API.Data
{
    public class ZAHikesDbContext: DbContext
    {
        public ZAHikesDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        { 
        }
        public DbSet<Difficulty> Difficulties { get; set; }
        public DbSet<Province> Provinces { get; set; }
        public DbSet<Hike> Hikes { get; set; }
    }
}
