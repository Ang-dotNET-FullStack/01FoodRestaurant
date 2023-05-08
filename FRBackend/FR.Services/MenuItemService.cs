using FR.Models;
using FR.Services.Interfaces;
using System.Linq.Expressions;

namespace FR.Services
{
    public class MenuItemService : IRepository<MenuItem>, IMenuItemService
    {
        public MenuItem Add(MenuItem entity)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<MenuItem> GetAll() 
        {
            throw new NotImplementedException();
        }

        public MenuItem GetFirstOrDefault(Expression<Func<MenuItem, bool>>? filter = null)
        {
            throw new NotImplementedException();
        }

        public MenuItem Remove(MenuItem entity)
        {
            throw new NotImplementedException();
        }

        public void RemoveRange(IEnumerable<MenuItem> entity)
        {
            throw new NotImplementedException();
        }

        public void Save()
        {
            throw new NotImplementedException();
        }
    }
}
