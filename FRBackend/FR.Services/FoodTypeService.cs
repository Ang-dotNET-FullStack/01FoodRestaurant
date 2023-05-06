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

        public FoodType Add(FoodType foodType)
        {
            try
            {
                _context.FoodTypes.AddAsync(foodType);
                this.Save();
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
            var fdType = _context.FoodTypes.FirstOrDefault(f => f.Id == id);
            if (fdType == null) return null;

            try
            {
                _context.Remove(fdType);
                this.Save();
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
                return null;
            }

            return fdType;
        }  

        public void Save()
        {
            _context.SaveChanges();
        }

        public FoodType Update(FoodType foodType)
        {
            throw new NotImplementedException();
        }
    }
}
