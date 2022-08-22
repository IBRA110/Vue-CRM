namespace Core.Entities;

using System.Text.Json.Serialization;

public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }

    [JsonIgnore]
    public string PasswordHash { get; set; }
}
