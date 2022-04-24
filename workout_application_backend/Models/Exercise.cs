using System.ComponentModel.DataAnnotations;

namespace workout_application_backend.Models
{
    public class Exercise
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? Images { get; set; }
        public string? Category { get; set; }
    }
}
