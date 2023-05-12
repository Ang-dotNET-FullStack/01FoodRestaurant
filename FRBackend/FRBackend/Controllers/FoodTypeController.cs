using FR.Models;
using FR.Services;
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

        [HttpGet("{id}")]
        public async Task<IActionResult> GetFoodTypeById(int id)
        {
            var foodType = _foodTypeService.Get(id);
            if (foodType == null) return NotFound();

            return Ok(foodType);
        }

        [HttpPost]
        public async Task<IActionResult> AddFoodTypes(FoodType foodType)
        {
            var newFoodtype = _foodTypeService.Add(foodType);
            if (newFoodtype == null) return null;

            return Ok(newFoodtype);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateFoodType(FoodType foodType)
        {
            var ft = _foodTypeService.Update(foodType);
            if (ft == null) return BadRequest();

            return Ok(ft);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFoodType(int id)
        {
            var foodType = _foodTypeService.Delete(id);
            if (foodType == null) return BadRequest();

            return Ok(foodType);
        }
    }
}
