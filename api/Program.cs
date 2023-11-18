global using api.models;
using api.services.Items;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "origin", b =>
    {
        if (builder.Environment.IsDevelopment())
        {
            b.AllowAnyOrigin();
        }

        b.AllowAnyMethod()
            .AllowAnyHeader()
            .SetIsOriginAllowed((_) => true);
    });
});

// Add services to the container.


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IItemsService, ItemsService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("origin");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
