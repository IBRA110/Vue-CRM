namespace Infrastructure.Data;

using Microsoft.EntityFrameworkCore;
using Core.Entities;
using Microsoft.Extensions.Configuration;

public class DataContext : DbContext
{
    protected readonly IConfiguration Configuration;

    public DataContext(IConfiguration configuration)
    {
        Configuration = configuration;
    }
    public DbSet<User> Users { get; set; }
}