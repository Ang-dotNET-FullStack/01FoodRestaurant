using FR.Models;
using FR.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FRBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FoodTypeController : ControllerBase
    {
        private readonly IFoodTypeService _foodTypeService;

        public FoodTypeController(IFoodTypeService foodTypeService)
        {
            _foodTypeService = foodTypeService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<FoodType>>> GetFoodTypes()
        {
            var foodTypes = _foodTypeService.GetAll();
            if(foodTypes == null) return NotFound();

            return Ok(foodTypes);
        }

        [HttpPost]
        public async Task<IActionResult> AddFoodTypes(FoodType foodType)
        {
            var newFoodtype = _foodTypeService.Add(foodType);
            if (newFoodtype == null) return null;

            return Ok(newFoodtype);
        }
    }
}
