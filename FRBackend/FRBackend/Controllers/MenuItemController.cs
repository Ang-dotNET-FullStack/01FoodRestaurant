using FR.Models;
using FR.Services;
using FR.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FRBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuItemController : ControllerBase
    {
        private readonly IMenuItemService _menuItemService;
        public MenuItemController(IMenuItemService menuItemService)
        {
            _menuItemService = menuItemService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MenuItem>>> GetMenuItems()
        {
            var menuItem = _menuItemService.GetAll();
            if (menuItem == null) return NotFound();

            return Ok(menuItem);
        }

        [HttpPost]
        public async Task<IActionResult> AddMenuItem(MenuItem menuItem)
        {
            var menu = _menuItemService.Add(menuItem);
            if (menu == null) return NotFound();

            return Ok(menu);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMenuItem(int id)
        {
            var menuItem = _menuItemService.Delete(id);
            if (menuItem == null) return BadRequest();

            return Ok(menuItem);
        }
    }
}
