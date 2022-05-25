using CategoryProduct.Entities.Abstracts;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CategoryProduct.Entities
{
    public class Category : BaseEntity
    {
        [Required, StringLength(50)]
        public string Name { get; set; }

        [Required, StringLength(100)]
        public string Description { get; set; }
        public virtual List<Product> Products {  get; set;}
    }
}
