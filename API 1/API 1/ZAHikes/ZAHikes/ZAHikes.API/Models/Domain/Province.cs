namespace ZAHikes.API.Models.Domain
{
    public class Province
    {
        public Guid Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string? ProvinceImageUrl { get; set; }
    }
}
