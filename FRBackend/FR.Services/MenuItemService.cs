using FR.DataAccess.Data;
using FR.Models;
using FR.Services.Interfaces;

namespace FR.Services
{
    public class MenuItemService : Repository<MenuItem>, IMenuItemService
    {

        private readonly FRDbContext _context;
        private readonly ICategoryService _category;
        private readonly IFoodTypeService _foodType;
        public MenuItemService(FRDbContext context, ICategoryService category, IFoodTypeService foodType) : base(context)
        {
           _context = context;
           _category = category;
           _foodType = foodType;

        }

        public IEnumerable<MenuItem> GetAll()
        {
            var menuItems = _context.MenuItem.ToList();
            List<MenuItem> menu = new List<MenuItem>();
            foreach (var menuItem in menuItems)
            {
                menuItem.Category = _category.Get(menuItem.CategoryId);
                menuItem.FoodType = _foodType.Get(menuItem.FoodTypeId);
                menu.Add(menuItem);
            }
            return menu;
        }

        public MenuItem Add(MenuItem menuItem)
        {
            var category = menuItem.CategoryId;
            var foodType = menuItem.FoodTypeId;
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