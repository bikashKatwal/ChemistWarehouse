using ChemistWareHouse.Pizza.Api.Models;

namespace ChemistWareHouse.Pizza.Api.Models
{
    public static class PizzariaLocation
    {
        public static List<Location> Locations = new()
        {
           new Location{LocationId=1, LocationName="Preston Pizzeria" },
           new Location{LocationId=2, LocationName="Southbank Pizzeria"},
        };

        public static List<LocationPizzaMenu> LocationPizzaMenu = new List<LocationPizzaMenu>
            {
                new LocationPizzaMenu {
                    LocationId= Locations[0].LocationId,
                    LocationName=Locations[0].LocationName,
                    Pizzas = new List<PizzaMenuItem>
                    {
                        new PizzaMenuItem{
                            PizzaId= 1,
                            PizzaType="Capricciosa Pipeline Check",
                            Price=20,
                            LocationId=Locations[0].LocationId,
                            Ingredients= new List<Ingredient>{
                                new Ingredient
                                {
                                    IngredientId= 1,
                                    IngredientName="Cheese",
                                    PizzaId= 1,
                                 },
                                 new Ingredient
                                 {
                                    IngredientId= 2,
                                    IngredientName="Ham",
                                     PizzaId= 1,
                                 },
                                  new Ingredient
                                  {
                                     IngredientId= 3,
                                     IngredientName="Mushrooms",
                                     PizzaId= 1,
                                  },
                                   new Ingredient
                                    {
                                        IngredientId= 4,
                                        IngredientName="Olives",
                                        PizzaId= 1,
                                    },
                            }
                        },
                        new PizzaMenuItem{
                            PizzaId= 2,
                            PizzaType="Mexicana",
                            Price=18,
                            LocationId=Locations[0].LocationId,
                            Ingredients= new List<Ingredient>{
                                new Ingredient
                                {
                                    IngredientId= 1,
                                    IngredientName="Cheese",
                                    PizzaId= 2,
                                },
                                new Ingredient
                                {
                                    IngredientId= 8,
                                    IngredientName="Salami",
                                    PizzaId= 2,
                                },
                                new Ingredient
                                {
                                    IngredientId= 3,
                                    IngredientName="Capsicum",
                                    PizzaId= 2,
                                },
                                new Ingredient
                                {
                                    IngredientId= 10,
                                    IngredientName="Chilli",
                                    PizzaId= 2,
                                },
                            }
                        },
                        new PizzaMenuItem{
                            PizzaId= 3,
                            PizzaType="Margherita",
                            Price=22,
                            LocationId=Locations[0].LocationId,
                            Ingredients= new List<Ingredient>{
                                new Ingredient
                                {
                                    IngredientId= 1,
                                    IngredientName="Cheese",
                                     PizzaId= 3,
                                },
                                new Ingredient
                                {
                                    IngredientId= 5,
                                    IngredientName="Spinach",
                                     PizzaId= 3,
                                },
                                new Ingredient
                                {
                                    IngredientId= 6,
                                    IngredientName="Ricotta",
                                     PizzaId= 3,
                                },
                                new Ingredient
                                {
                                    IngredientId= 7,
                                    IngredientName="Cherry Tomatoes",
                                     PizzaId= 3,
                                },
                            }
                        },

                    }
                },
                new LocationPizzaMenu{
                    LocationId= Locations[1].LocationId,
                    LocationName=Locations[1].LocationName,
                    Pizzas = new List<PizzaMenuItem>
                    {
                        new PizzaMenuItem{
                            PizzaId= 1,
                            PizzaType="Capricciosa",
                            Price=25,
                            LocationId= Locations[1].LocationId,
                            Ingredients= new List<Ingredient>{
                                new Ingredient
                                {
                                    IngredientId= 1,
                                    IngredientName="Cheese",
                                       PizzaId= 1,
                                },
                                 new Ingredient
                                {
                                    IngredientId= 2,
                                    IngredientName="Ham",
                                       PizzaId= 1,
                                },
                                  new Ingredient
                                {
                                    IngredientId= 3,
                                    IngredientName="Mushrooms",
                                       PizzaId= 1,
                                },
                                   new Ingredient
                                {
                                    IngredientId= 4,
                                    IngredientName="Olives",
                                       PizzaId= 1,
                                },
                            }
                        },
                        new PizzaMenuItem{
                            PizzaId= 4,
                            PizzaType="Vegetarian",
                            Price=17,
                            LocationId= Locations[1].LocationId,

                            Ingredients= new List<Ingredient>{
                                new Ingredient
                                {
                                    IngredientId= 1,
                                    IngredientName="Cheese",
                                     PizzaId= 4,
                                },
                                 new Ingredient
                                {
                                    IngredientId= 3,
                                    IngredientName="Mushrooms",
                                     PizzaId= 4,
                                },
                                  new Ingredient
                                {
                                    IngredientId= 9,
                                    IngredientName="Capsicum",
                                     PizzaId= 4,
                                },
                                new Ingredient
                                {
                                    IngredientId= 11,
                                    IngredientName="Onion",
                                     PizzaId= 4,
                                },
                                new Ingredient
                                {
                                    IngredientId= 4,
                                    IngredientName="Olives",
                                     PizzaId= 4,
                                },
                            }
                        }
                    }
                }
            };

        public static List<Ingredient> Ingredients = new List<Ingredient> {
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
          new Ingredient
          {
              IngredientId= 5,
              IngredientName="Spinach"
          },
          new Ingredient
          {
              IngredientId= 6,
              IngredientName="Ricotta"
          },
          new Ingredient
          {
              IngredientId= 7,
              IngredientName="Cherry Tomatoes"
          },
          new Ingredient
          {
              IngredientId= 8,
              IngredientName="Salami"
          },
          new Ingredient
          {
              IngredientId= 9,
              IngredientName="Capsicum"
          },
          new Ingredient
          {
              IngredientId= 10,
              IngredientName="Chilli"
          },
          new Ingredient
            {
                IngredientId = 11,
                IngredientName = "Onion"
            },
        };

    }
}
