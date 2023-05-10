using FR.DataAccess.Data;
using FR.Models;
using FR.Services.Interfaces;

namespace FR.Services
{
    public class CategoryService : Repository<Category>, ICategoryService
    {
        private readonly FRDbContext _context;
        public CategoryService(FRDbContext context) : base(context)
        {
            _context = context;
        }

        public IEnumerable<Category> GetAll()
        {
            var categories = _context.Category.ToList();
            return categories;
        }

        public Category Add(Category category)
        {
            try
            {
                _context.Category.AddAsync(category);
                Save();
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
            return category;
        }

        public Category Update(Category category)
        {
            var obj = _context.Category.FirstOrDefault(c => c.Id == category.Id);
            if (obj == null) return null;
            obj.Name = category.Name;
            obj.DisplayOrder = category.DisplayOrder;

            try
            {
                _context.Update(obj);
                Save();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
            return obj;
        }

        public Category Delete(int id)
        {
            var category = _context.Category.FirstOrDefault(c => c.Id == id);
            if (category == null) return null;

            try
            {
                _context.Remove(category);
                Save();
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
            return category;
        }

        public Category Get(int id) => _context.Category.FirstOrDefault(f => f.Id == id);
    }
}
