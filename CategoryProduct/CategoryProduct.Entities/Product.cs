using CategoryProduct.Entities.Abstracts;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CategoryProduct.Entities
{
    public class Product : BaseEntity
    {
        [Required,StringLength(50)]
        public string Name { get; set; }

        [Required]
        public int Price { get; set; }

        [Required, StringLength(100)]
        public string Description { get; set; }

        // Hangi kategoriye bagli oldugunu ifade edyor
        public int CategoryId { get; set; }
        [ForeignKey(nameof(CategoryId))]
        public virtual Category Category { get; set; }
    }
}
