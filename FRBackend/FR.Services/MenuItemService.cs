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
                menuItem.Category = this.GetCategory(menuItem.CategoryId);
                menuItem.FoodType = this.GetFoodType(menuItem.FoodTypeId);
                menu.Add(menuItem);
            }
            return menu;
        }

        public MenuItem Add(MenuItem menuItem)
        {
            MenuItem menu = new MenuItem()
            {
                Name = menuItem.Name,
                Description = menuItem.Description,
                Image = menuItem.Image,
                Price = menuItem.Price,
                FoodTypeId = menuItem.FoodTypeId,
                CategoryId = menuItem.CategoryId
            };

            try
            {
                _context.MenuItem.AddAsync(menu);
                Save();
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
            return menu;
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

        private Category GetCategory(int id)
        {
            return _category.Get(id);
        }

        private FoodType GetFoodType(int id)
        {
            return _foodType.Get(id);
        }
    }
}