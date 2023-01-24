using ChemistWareHouse.Pizza.Api.Models;

namespace ChemistWareHouse.Pizza.Api.Services;

public class LocationPizzaService : ILocationPizzaService
{
    public void AddPizzaria(Location location)
    {
        var locations = PizzariaLocation.Locations;
        var pizzariaLocation = new Location
        {
            Id = locations[locations.Count() - 1].Id + 1,
            LocationName = location.LocationName
        };
        locations.Add(pizzariaLocation);
    }

    public List<LocationPizza> GetLocationPizzas()
    {
        var pizzas = new List<LocationPizza>
        {
            new LocationPizza{
                Id= 1,
                LocationName="Preston",
                Pizzas = new List<Models.Pizza>
                {
                    new Models.Pizza{
                        Id= 1,
                        PizzaType="Capricciosa",
                        Price=20,
                        Ingredients= new List<Ingredient>{
                            new Ingredient
                            {
                                Id= 1,
                                Name="Cheese"
                            },
                             new Ingredient
                            {
                                Id= 2,
                                Name="Ham"
                            },
                              new Ingredient
                            {
                                Id= 3,
                                Name="Mushrooms"
                            },
                               new Ingredient
                            {
                                Id= 4,
                                Name="Olives"
                            },
                        }

                    }
                }
            }
        };
        return pizzas;
    }

    public List<Location> GetLocations()
    {
        return PizzariaLocation.Locations;
    }
}

