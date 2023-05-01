using FR.Models;

namespace FR.Services.Interfaces
{
    public interface ICategoryService : IRepository<Category>
    {
        void Update(Category category);
        void Save();
    }
}
