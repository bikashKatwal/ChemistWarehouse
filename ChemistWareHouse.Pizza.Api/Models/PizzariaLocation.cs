namespace ChemistWareHouse.Pizza.Api.Models
{
    public static class PizzariaLocation
    {
        public static List<Location> Locations = new()
        {
           new Location{LocationId=1, LocationName="Preston Pizzeria" },
           new Location{LocationId=2, LocationName="Southbank Pizzeria"},
        };
       
    }
}
