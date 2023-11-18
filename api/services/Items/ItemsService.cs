
using api.DTOs;

namespace api.services.Items;

public class ItemsService : IItemsService
{
    private readonly List<ItemModel> items = new()
    {
        // new() {
        //     Id = 0, Title="Leslie Alexander",
        //     Description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates harum quam totam? Hsit amet consectetur, adipisicing elit. Commodi optio sit harum eaque unde veniam architecto hic laboriosam alias velit."
        // }

    };

    public ItemModel AddItem(AddItemDto itemToAdd)
    {
        if (itemToAdd == null)
        {
            throw new ArgumentNullException(nameof(itemToAdd));
        }

        var existingItem = GetItemByTitle(itemToAdd.Title);

        if (existingItem is not null)
            throw new InvalidOperationException("Item with given title already exists");

        int newId = items.Count > 0 ? items.Max(i => i.Id) + 1 : 0;

        var newItem = new ItemModel
        {
            Id = newId,
            Title = itemToAdd.Title,
            Description = itemToAdd.Description
        };

        items.Add(newItem);

        return newItem;
    }

    public List<ItemModel> GetItems()
    {
        return items;
    }

    private ItemModel GetItemByTitle(string title)
    {
        var item = items.Where(item => item.Title == title).FirstOrDefault();

        return item;
    }
}
