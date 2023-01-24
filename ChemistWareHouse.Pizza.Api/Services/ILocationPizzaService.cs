using ChemistWareHouse.Pizza.Api.Models;

namespace ChemistWareHouse.Pizza.Api.Services;

public interface ILocationPizzaService
{
    void AddPizzaria(Location location);
    List<Location> GetLocations();
    List<LocationPizza> GetLocationPizzas();
}

