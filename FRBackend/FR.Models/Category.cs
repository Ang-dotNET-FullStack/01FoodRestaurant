using System.ComponentModel.DataAnnotations;

namespace FR.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        
        public string Name { get; set; }

        [Display(Name = "Display Order")]
        public int DisplayOrder { get; set; }
    }
}
