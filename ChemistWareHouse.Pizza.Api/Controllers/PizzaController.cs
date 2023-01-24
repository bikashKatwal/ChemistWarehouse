using ChemistWareHouse.Pizza.Api.Models;
using ChemistWareHouse.Pizza.Api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace ChemistWareHouse.Pizza.Api.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class PizzaController : ControllerBase
    {
        private readonly ILocationPizzaService _pizzaService;

        public PizzaController(ILocationPizzaService pizzaService)
        {
            _pizzaService = pizzaService;
        }

        [HttpGet(Name = "GetLocation")]
        public IActionResult GetLocation()
        {
            var locations = _pizzaService.GetLocations();
            return Ok(locations);
        }

        [HttpGet(Name = "GetLocationPizza")]
        public IActionResult GetLocationPizza()
        {
            var pizzas = _pizzaService.GetLocationPizzas();
            return Ok(pizzas);
        }

        [HttpPost(Name ="AddPizzariallocation")]
        public IActionResult AddPizzaria(Location location)
        {
            _pizzaService.AddPizzaria(location);
            return Ok(new { IsSuccess = true, Message = "Successfully Added" });
        }
    }
}
