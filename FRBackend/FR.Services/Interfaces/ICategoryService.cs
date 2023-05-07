using FR.Models;

namespace FR.Services.Interfaces
{
    public interface ICategoryService : IRepository<Category>
    {
        Category Update(Category category);
        Category Delete(int id);
    }
}
