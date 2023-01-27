using System.ComponentModel.DataAnnotations;

namespace ChemistWareHouse.Pizza.Api.Models;

public class Location
{
    public int LocationId { get; set; }
    [Required]
    public string LocationName { get; set; } = String.Empty;
}

public class Pizza
{
    public int PizzaId { get; set; }
    public string? PizzaType { get; set; }
    public decimal Price { get; set; }
    public List<Ingredient>? Ingredients { get; set; }
}

public class Ingredient
{
    public int IngredientId { get; set; }
    public string IngredientName { get; set; } = String.Empty;
}

public class LocationPizzaMenu : Location
{
    public List<Pizza>? Pizzas { get; set; }
}






