using FR.Models;
using Microsoft.EntityFrameworkCore;

namespace FR.DataAccess.Data
{
    public class FRDbContext : DbContext
    {
        public FRDbContext(DbContextOptions<FRDbContext> options) : base(options)
        {
            
        }

        public DbSet<Category> Category { get; set; }
    }
}
