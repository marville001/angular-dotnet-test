
namespace api.models;

public class ItemModel
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public int? Factorial { get; set; } = null;

}