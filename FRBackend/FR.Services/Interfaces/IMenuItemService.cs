using FR.Models;

namespace FR.Services.Interfaces
{
    public interface IMenuItemService : IRepository<MenuItem>
    {
        MenuItem Update(MenuItem menuItem);
        MenuItem Delete(int id);
    }
}
