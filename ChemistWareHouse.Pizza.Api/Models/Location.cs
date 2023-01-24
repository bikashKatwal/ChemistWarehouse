using System.ComponentModel.DataAnnotations;

namespace ChemistWareHouse.Pizza.Api.Models;

public class Location
{
    public int Id { get; set; }
    [Required]
    public string LocationName { get; set; }
}

public class Pizza
{
    public int Id { get; set; }
    public string? PizzaType { get; set; }
    public decimal Price { get; set; }
    public List<Ingredient>? Ingredients { get; set; }
}

public class Ingredient
{
    public int Id { get; set; }
    public string Name { get; set; } = String.Empty;
}

public class LocationPizza : Location
{
    public List<Pizza>? Pizzas { get; set; }
}




