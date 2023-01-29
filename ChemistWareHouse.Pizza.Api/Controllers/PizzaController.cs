using ChemistWareHouse.Pizza.Api.Models;
using ChemistWareHouse.Pizza.Api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace ChemistWareHouse.Pizza.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PizzaController : ControllerBase
    {
        private readonly ILocationPizzaService _pizzaService;

        public PizzaController(ILocationPizzaService pizzaService)
        {
            _pizzaService = pizzaService;
        }

        [HttpGet("GetLocations", Name = "GetLocations")]
        public IActionResult GetLocations()
        {
            var locations = _pizzaService.GetLocations();
            return Ok(locations);
        }

        [HttpGet("GetPizzaMenuById/{id}", Name = "GetPizzaMenuById")]
        public IActionResult GetPizzaMenuById(int id)
        {
            var pizzas = _pizzaService.GetPizzaMenuById(id);
            return Ok(pizzas);
        }

        [HttpPost("CreatePizzaria", Name = "CreatePizzaria")]
        public IActionResult AddPizzaria(Location location)
        {
            _pizzaService.AddPizzaria(location);
            return Ok(new { IsSuccess = true, Message = "Successfully Added" });
        }

        [HttpPost("UpdatePizza", Name = "UpdatePizza")]
        public IActionResult UpdatePizza(PizzaRequestDto requestDto)
        {
            var isUpdated = _pizzaService.UpdatePizza(requestDto);
            return Ok(new { IsSuccess = isUpdated, Message = isUpdated ? "Successfully Updated" : "Could not update" });
        }

        [HttpGet("GetAllIngredients", Name = "GetAllIngredients")]
        public IActionResult GetAllIngredients()
        {
            var ingredients = _pizzaService.GetAllIngredients();
            return Ok(ingredients);
        }
    }
}
