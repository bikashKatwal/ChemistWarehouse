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

        [HttpGet("GetLocationPizza", Name = "GetLocationPizza")]
        public IActionResult GetLocationPizza()
        {
            var pizzas = _pizzaService.GetLocationPizzas();
            return Ok(pizzas);
        }

        [HttpPost("AddPizzaria", Name = "AddPizzaria")]
        public IActionResult AddPizzaria(Location location)
        {
            _pizzaService.AddPizzaria(location);
            return Ok(new { IsSuccess = true, Message = "Successfully Added" });
        }
    }
}
