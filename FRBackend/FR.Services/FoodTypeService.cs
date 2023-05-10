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
            var foodTypes = _context.FoodType.ToList();
            return foodTypes;
        }

        public FoodType Add(FoodType foodType)
        {
            try
            {
                _context.FoodType.AddAsync(foodType);
                Save();
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
            return foodType;
        }

        public FoodType Delete(int id)
        {
            var fdType = _context.FoodType.FirstOrDefault(f => f.Id == id);
            if (fdType == null) return null;

            try
            {
                _context.Remove(fdType);
                Save();
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                return null;
            }

            return fdType;
        }

        public FoodType Update(FoodType foodType)
        {
            var obj = _context.FoodType.FirstOrDefault(f => f.Id == foodType.Id);
            if (obj == null) return null;
            obj.Name = foodType.Name;

            try
            {
                _context.Update(obj);
                Save();
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
            return obj;
        }

        public FoodType Get(int id) => _context.FoodType.FirstOrDefault(f => f.Id == id);
    }
}
