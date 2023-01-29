using System.ComponentModel.DataAnnotations;

namespace ChemistWareHouse.Pizza.Api.Models;

public class Location
{
    public int LocationId { get; set; }
    [Required]
    public string LocationName { get; set; } = String.Empty;
}

public class PizzaMenuItem 
{
    public int PizzaId { get; set; }
    public string? PizzaType { get; set; }
    public decimal Price { get; set; }
    public int LocationId { get; set; }
    public List<Ingredient>? Ingredients { get; set; }
}

public class Ingredient
{
    public int IngredientId { get; set; }
    public string IngredientName { get; set; } = String.Empty;
    public int PizzaId { get; set; }
}

public class LocationPizzaMenu : Location
{
    public List<PizzaMenuItem>? Pizzas { get; set; }
}

public class PizzaRequestDto
{
    public int LocationId { get; set; }
    public int PizzaId { get; set; }
    public string? PizzaType { get; set; }
    public decimal Price { get; set; }
}






