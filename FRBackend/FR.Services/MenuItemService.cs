using FR.DataAccess.Data;
using FR.Models;
using FR.Services.Interfaces;

namespace FR.Services
{
    public class MenuItemService : Repository<MenuItem>, IMenuItemService
    {

        private readonly FRDbContext _context;
        public MenuItemService(FRDbContext context) : base(context)
        {
            _context = context;
        }

        public MenuItem Add(MenuItem menuItem)
        {
            try
            {
                _context.MenuItem.AddAsync(menuItem);
                Save();
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
            return menuItem;
        }

        public MenuItem Delete(int id)
        {
            var menuItem = _context.MenuItem.FirstOrDefault(m => m.Id == id);
            if (menuItem == null) return null;

            try
            {
                _context.Remove(menuItem);
                Save();
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
            return menuItem;
        }

        public IEnumerable<MenuItem> GetAll() 
        {
            var menuItems = _context.MenuItem.ToList();
            return menuItems;
        }

        public MenuItem Update(MenuItem menuItem)
        {

            var obj = _context.MenuItem.FirstOrDefault(c => c.Id == menuItem.Id);
            if (obj == null) return null;
            obj.Name = menuItem.Name;
            obj.Description = menuItem.Description;
            obj.Price = menuItem.Price;
            obj.CategoryId = menuItem.CategoryId;
            obj.FoodTypeId = menuItem.FoodTypeId;
            if (obj.Image != null)
            {
                obj.Image = menuItem.Image;
            }

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
    }
}
