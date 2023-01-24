namespace ChemistWareHouse.Pizza.Api.Models
{
    public static class PizzariaLocation
    {
        public static List<Location> Locations = new()
        {
           new Location{Id=1, LocationName="Preston Pizzeria" },
           new Location{Id=2, LocationName="Southbank Pizzeria"},
        };
       
    }
}
