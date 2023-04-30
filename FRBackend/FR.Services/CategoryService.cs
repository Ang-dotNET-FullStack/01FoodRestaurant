using FR.DataAccess.Data;
using FR.Models;
using FR.Services.Interfaces;

namespace FR.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly FRDbContext _context;
        public CategoryService(FRDbContext context)
        {
            _context = context;
        }
        public IEnumerable<Category> GetAll()
        {
            var categories = _context.Category.ToList();
            return categories;
        }
    }
}
