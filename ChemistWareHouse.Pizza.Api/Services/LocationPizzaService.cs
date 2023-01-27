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
        var locationPizzaMenu = new List<LocationPizzaMenu>
        {
            new LocationPizzaMenu {
                LocationId= PizzariaLocation.Locations[0].LocationId,
                LocationName=PizzariaLocation.Locations[0].LocationName,
                Pizzas = new List<Models.Pizza>
                {
                    new Models.Pizza{
                        PizzaId= 1,
                        PizzaType="Capricciosa",
                        Price=20,
                        Ingredients= new List<Ingredient>{
                            new Ingredient
                            {
                                IngredientId= 1,
                                IngredientName="Cheese"
                            },
                             new Ingredient
                            {
                                IngredientId= 2,
                                IngredientName="Ham"
                            },
                              new Ingredient
                            {
                                IngredientId= 3,
                                IngredientName="Mushrooms"
                            },
                               new Ingredient
                            {
                                IngredientId= 4,
                                IngredientName="Olives"
                            },
                        }
                    },
                    new Models.Pizza{
                        PizzaId= 2,
                        PizzaType="Mexicana",
                        Price=18,
                        Ingredients= new List<Ingredient>{
                            new Ingredient
                            {
                                IngredientId= 1,
                                IngredientName="Cheese"
                            },
                            new Ingredient
                            {
                                IngredientId= 2,
                                IngredientName="Salami"
                            },
                            new Ingredient
                            {
                                IngredientId= 3,
                                IngredientName="Capsicum"
                            },
                            new Ingredient
                            {
                                IngredientId= 4,
                                IngredientName="Chilli"
                            },
                        }
                    },
                    new Models.Pizza{
                        PizzaId= 3,
                        PizzaType="Margherita",
                        Price=22,
                        Ingredients= new List<Ingredient>{
                            new Ingredient
                            {
                                IngredientId= 1,
                                IngredientName="Cheese"
                            },
                            new Ingredient
                            {
                                IngredientId= 2,
                                IngredientName="Spinach"
                            },
                            new Ingredient
                            {
                                IngredientId= 3,
                                IngredientName="Ricotta"
                            },
                            new Ingredient
                            {
                                IngredientId= 4,
                                IngredientName="Cherry Tomatoes"
                            },
                        }
                    },

                }
            },
            new LocationPizzaMenu{
                LocationId= PizzariaLocation.Locations[1].LocationId,
                LocationName=PizzariaLocation.Locations[1].LocationName,
                Pizzas = new List<Models.Pizza>
                {
                    new Models.Pizza{
                        PizzaId= 1,
                        PizzaType="Capricciosa",
                        Price=25,
                        Ingredients= new List<Ingredient>{
                            new Ingredient
                            {
                                IngredientId= 1,
                                IngredientName="Cheese"
                            },
                             new Ingredient
                            {
                                IngredientId= 2,
                                IngredientName="Ham"
                            },
                              new Ingredient
                            {
                                IngredientId= 3,
                                IngredientName="Mushrooms"
                            },
                               new Ingredient
                            {
                                IngredientId= 4,
                                IngredientName="Olives"
                            },
                        }
                    },
                    new Models.Pizza{
                        PizzaId= 2,
                        PizzaType="Vegetarian",
                        Price=17,
                        Ingredients= new List<Ingredient>{
                            new Ingredient
                            {
                                IngredientId= 1,
                                IngredientName="Cheese"
                            },
                             new Ingredient
                            {
                                IngredientId= 2,
                                IngredientName="Mushrooms"
                            },
                              new Ingredient
                            {
                                IngredientId= 3,
                                IngredientName="Capsicum"
                            },
                            new Ingredient
                            {
                                IngredientId= 4,
                                IngredientName="Onion"
                            },
                            new Ingredient
                            {
                                IngredientId= 5,
                                IngredientName="Olives"
                            },
                        }
                    }
                }
            }
        };
        var pizza = locationPizzaMenu.FirstOrDefault(x => x.LocationId == LocationId);
        return pizza;
    }

    public List<Location> GetLocations()
    {
        return PizzariaLocation.Locations;
    }
}

