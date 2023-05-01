using FR.Models;
using FR.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FRBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryService _categoryService;
        public CategoriesController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
        {
            var categories = _categoryService.GetAll();
            if (categories == null)
            {
                return NotFound();
            }
            return Ok(categories);
        }

        [HttpPost]
        public async Task<IActionResult> AddCategories(Category category)
        {
            var newCategory = _categoryService.Add(category);
            if (newCategory == null)
            {
                return BadRequest();
            }
            return Ok(newCategory);
        }
    }
}
