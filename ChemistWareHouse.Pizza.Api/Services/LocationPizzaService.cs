using ChemistWareHouse.Pizza.Api.Models;

namespace ChemistWareHouse.Pizza.Api.Services;

public class LocationPizzaService : ILocationPizzaService
{
    public void AddPizzaria(Location location)
    {
        var locations = PizzariaLocation.Locations;
        var pizzariaLocation = new Location
        {
            LocationId = locations[locations.Count() - 1].LocationId + 1,
            LocationName = location.LocationName
        };
        locations.Add(pizzariaLocation);
    }

    public LocationPizzaMenu? GetPizzaMenuById(int LocationId)
    {
        var pizza = PizzariaLocation.LocationPizzaMenu.FirstOrDefault(x => x.LocationId == LocationId);
        return pizza;
    }

    public List<Location> GetLocations()
    {
        return PizzariaLocation.Locations;
    }

    public bool UpdatePizza(PizzaRequestDto pizza)
    {
        var pizzaMenu = PizzariaLocation.LocationPizzaMenu.FirstOrDefault(x => x.LocationId == pizza.LocationId);
        var item = pizzaMenu?.Pizzas
                 .FirstOrDefault(x => x.PizzaId == pizza.PizzaId);

        if (item != null)
        {
            item.PizzaType = pizza.PizzaType;
            item.Price = pizza.Price;
            return true;
        }
        return false;
    }

    public List<Ingredient> GetAllIngredients()
    {
        return PizzariaLocation.Ingredients;
    }
}

