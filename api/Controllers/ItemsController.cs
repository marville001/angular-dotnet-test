using api.DTOs;
using api.services.Items;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[ApiController]
[Route("[controller]")]
public class ItemsController : ControllerBase
{
    private readonly IItemsService _itemsService;

    public ItemsController(IItemsService itemsService)
    {
        _itemsService = itemsService;
    }

    [HttpGet(Name = "GetItems")]
    public ActionResult<List<ItemModel>> GetItems()
    {
        try
        {
            var result = _itemsService.GetItems();

            return Ok(result);
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpPost]
    [Route("new")]
    public ActionResult AddItem(AddItemDto payload)
    {
        try
        {
            var result =  _itemsService.AddItem(payload);


            return Ok(result);
        }
        catch (Exception ex)
        {

            return BadRequest(new { message = ex.Message });
        }
    }
}
