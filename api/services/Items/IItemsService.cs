using api.DTOs;

namespace api.services.Items
{
    public interface IItemsService
    {
        public List<ItemModel> GetItems();
        public ItemModel AddItem(AddItemDto itemToAdd);
        public List<ItemModel> GetFactorials();
    }
}