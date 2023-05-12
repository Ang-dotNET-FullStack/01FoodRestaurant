using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FR.Models
{
    public class MenuItem
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }

        [Range(1,1000, ErrorMessage = "Price should be between Rs: 100 and Rs: 10,000")]
        public double Price { get; set; }

        public virtual int CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public virtual Category Category { get; set; }

        public virtual int FoodTypeId { get; set; }
        [ForeignKey("FoodTypeId")]        
        public virtual FoodType FoodType { get; set; }
    }
}
