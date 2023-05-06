using FR.DataAccess.Data;
using FR.Models;
using FR.Services.Interfaces;

namespace FR.Services
{
    public class FoodTypeService : Repository<FoodType>, IFoodTypeService
    {
        private readonly FRDbContext _context;
        public FoodTypeService(FRDbContext context) : base(context)
        {
            _context = context;
        }

        public IEnumerable<FoodType> GetAll()
        {
            var foodTypes = _context.FoodTypes.ToList();
            return foodTypes;
        }

        public void Save()
        {
            throw new NotImplementedException();
        }

        public FoodType Update(FoodType foodType)
        {
            throw new NotImplementedException();
        }
    }
}
