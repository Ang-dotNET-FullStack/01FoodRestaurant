using FR.Models;

namespace FR.Services.Interfaces
{
    public interface IFoodTypeService : IRepository<FoodType>
    {
        FoodType Update(FoodType foodType);
        FoodType Get(int id);
        FoodType Delete(int id);
    }
}
