using FR.Models;
using FR.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FRBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;
        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
        {
            var categories = _categoryService.GetAll();
            if (categories == null) return NotFound();
            
            return Ok(categories);
        }

        [HttpPost]
        public async Task<IActionResult> AddCategories(Category category)
        {
            var newCategory = _categoryService.Add(category);
            if (newCategory == null) return BadRequest();
            
            return Ok(newCategory);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCategory(Category category)
        {
            var cat = _categoryService.Update(category);
            if (cat == null) return BadRequest();

            return Ok(cat);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            var category = _categoryService.Delete(id);
            if (category == null) return BadRequest();

            return Ok(category);
        }
    }
}
