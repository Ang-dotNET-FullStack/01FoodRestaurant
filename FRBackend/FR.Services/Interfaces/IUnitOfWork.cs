using Microsoft.Extensions.DependencyInjection;

namespace FR.Services.Interfaces
{
    public interface IUnitOfWork
    {
        private static IServiceCollection _services;
        private static IServiceCollection Instance()
        {
            return _services;
        }

        public static void RegisterIoc(IServiceCollection services)
        {
            _services = services;

            _services.AddScoped<ICategoryService, CategoryService>();
            _services.AddScoped<IFoodTypeService, FoodTypeService>();
            _services.AddScoped<IMenuItemService, MenuItemService>();
        }
    }
}
